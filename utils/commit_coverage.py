#!/usr/bin/python3


# use python3
file = "commits.txt"


# git log --format=medium --after="Fri Mar 9 08:20:00 2018 -0300" > commits.txt # For gene

def turnStringListIntoCommit(commit_string_list=None):
    commit_line_id = "commit "
    commit_line_author = "Author: "
    commit_line_date = "Date:   "
    commit_line_merge = "Merge: "
    commit_line_signature = "Signed-off-by: "
    commit_line_co_author = "Co-Authored-by: "

    commit = {}
    commit['id'] = None
    commit['author'] = None
    commit['co_authors'] = []
    commit['date'] = None
    commit['merge'] = None
    commit['message'] = []
    commit['signatures'] = []
    for expression in commit_string_list:
        if expression.startswith(commit_line_id):
            commit['id'] = expression.split(commit_line_id)[1]
        elif expression.startswith(commit_line_author):
            commit['author'] = expression.split(commit_line_author)[1]
        elif expression.startswith(commit_line_date):
            commit['date'] = expression.split(commit_line_date)[1]
        elif expression.startswith(commit_line_merge):
            commit['merge'] = expression.split(commit_line_merge)[1]
        elif (commit_line_signature) in expression:
            commit['signatures'].append(expression.split(": ")[1])
        elif (commit_line_co_author.lower()) in expression.lower():
            commit['co_authors'].append(expression.split(": ")[1])
        else:
            commit['message'].append(expression)
        
    return commit

def getCommitsFromFile(file=None):
    commits_str_list = []

    with open(file) as f:
        expressions = []
        for i in f:
            expression=i.split('\n')[0]
            if expression:
                expressions.append(expression)
        commit_index = []

        for i in range(len(expressions)):
             if "commit " in expressions[i]:
                 commit_index.append(i)


        for i in range(len(commit_index)-1):
            commits_str_list.append(expressions[commit_index[i]:commit_index[i+1]])
        commits_str_list.append(expressions[commit_index[-1]:])

    commits = []
    for commit in commits_str_list:
        commits.append(turnStringListIntoCommit(commit))

    return commits

commits = getCommitsFromFile(file)

def getAuthorsFromCommits(commits_list=None):

    authors = []
    for commit in commits_list:
        if not (commit['author'] in authors):
            authors.append(commit['author'])

    return authors

authors = getAuthorsFromCommits(commits)


def getAuthorsNoDuplicate(authors=None):
    pass

authors_no_duplidates = getAuthorsNoDuplicate(authors)

def groupAuthorsByEmail(authors=None):
    pass

def getCommitMessageString(commit):
    print('\n'.join(commits['message']))


def getCommitById(commits, id):
    commit = None
    for x in commits:
        if x['id'] == id:
            commit = x
            break 


def countSignedCommits(commits):
    signed_commits = 0
    for commit in commits:
        if commit['signatures']:
            signed_commits = signed_commits + 1

    return signed_commits

def lastUnsignedCommit(commits):
    last_unsigned_commit = None
    for commit in commits:
        if not commit['signatures'] and not commit['merge']:
            last_unsigned_commit = commit
            break
    return last_unsigned_commit

def countMergeCommits(commits):
    merges_commits = 0
    for commit in commits:
        if commit['merge']:
            merges_commits = merges_commits + 1
    return merges_commits

def get_email(author):
    return author.split('<')[1].split('@')[0]

# git log -n 1 $(git rev-list --max-parents=0 HEAD)
def commitsFromAuthors(commits, authors):
    list_commits = {}

    for commit in commits:                                                                                                                                                        
        if(commit['author'] in authors):
            if not (get_email(commit['author']) in list_commits):
                list_commits[get_email(commit['author'])] = []
            list_commits[get_email(commit['author'])].append(
                "Date: '{}' Commit: __ {} __ Author: {}".format(
                    commit['date'], commit['id'][:7], commit['author']
                )
            )
    return list_commits

print ('Temos {} commits assinados, {} commits de merge e {} não assinados num total de {} commits.\n'.format(
    countSignedCommits(commits),
    countMergeCommits(commits),
    len(commits) - countSignedCommits(commits) - countMergeCommits(commits),
    len(commits)
    )
)
last_unsigned_commit = lastUnsignedCommit(commits)
print ('O Último commit não assinado é o commit {} de {} .\n'.format(last_unsigned_commit['id'], last_unsigned_commit['date']))
print (last_unsigned_commit)
list_commits = commitsFromAuthors(commits, authors[0])
print ("Eliseu Tem {} commits.\n".format(len(list_commits)))
for author in list_commits:
    for commit in list_commits[author]:
        print(commit)