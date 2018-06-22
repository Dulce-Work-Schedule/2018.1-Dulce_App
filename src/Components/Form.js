import t from 'tcomb-form-native';
import {black_dulce, orange_dulce} from '../styles';

t.form.Form.stylesheet.textbox.normal.color = black_dulce;
t.form.Form.stylesheet.textbox.normal.borderRadius = 20;
t.form.Form.stylesheet.controlLabel.normal.color = black_dulce;
t.form.Form.stylesheet.controlLabel.normal.fontFamily = 'Lato';
t.form.Form.stylesheet.controlLabel.normal.fontWeight = '200';

t.form.Form.stylesheet.textbox.error.color = black_dulce;
t.form.Form.stylesheet.textbox.error.borderRadius = 20;
t.form.Form.stylesheet.controlLabel.error.color = orange_dulce;
t.form.Form.stylesheet.controlLabel.error.fontFamily = 'Lato';
t.form.Form.stylesheet.controlLabel.error.fontWeight = '200';

export default t;
