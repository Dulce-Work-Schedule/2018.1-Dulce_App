if [ -z ${dulce_app} ]; then
	dulce_app_path=$(git rev-parse --show-toplevel)
	dulce_app_dir=$(basename "$dulce_app_path")
fi