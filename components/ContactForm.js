// https://suwaru.tokyo/%E3%80%90formik-yup%E3%80%91react%E7%B0%A1%E5%8D%98%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E4%BD%9C%E6%88%90%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E8%A7%A3%E8%AA%AC/
import React, { Component } from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import * as actions from '../actions'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

/**
 * 非同期 Varidation
 */
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('氏名は必須です'),
    email: Yup.string()
        .email('メールアドレスの形式に誤りがあります')
        .required('メールアドレスは必須です'),
    tel: Yup.string()
        .matches(phoneRegExp, '電話番号の形式に誤りがあります'),
    content: Yup.string()
        .required('お問い合わせ内容は必須です'),
});

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.defaultFormState = {
            name: '',
            email: '',
            tel: '',
            content: '',
        }
        this.doSubmit = this.doSubmit.bind(this);
    }

    /**
     * フォーム送信後の処理
     */
    handleSubmit (form) {
        // 値をコンソール表示
        console.log(form)
    }
    doSubmit(action) {
        console.log("doSubmit");
        console.table(this.props);
        return this.props.dispatch(action);
      }

    render() {
        return (
            <Formik
                onSubmit={this.handleSubmit}
                initialValues={this.defaultFormState}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="form-field">
                        <Field
                            name="name"
                            type="text"
                            placeholder="氏名"
                        />
                    </div>
                    <div className="form-field">
                        <Field
                            name="email"
                            type="email"
                            placeholder="メールアドレス"
                        />
                    </div>
                    <div className="form-field">
                        <Field
                            name="tel"
                            type="tel"
                            placeholder="電話番号"
                        />
                    </div>
                    <div className="form-field">
                        <Field
                            name="content"
                            component="textarea"
                            placeholder="お問い合わせ内容"
                        />
                    </div>
                    <div className="form-field">
                        <button type="submit">
                            送信
                        </button>
                    </div>
                    <ErrorMessage
                        name="name"
                        component="div"
                        className="invalidForm"
                    />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className="invalidForm"
                    />
                    <ErrorMessage
                        name="tel"
                        component="div"
                        className="invalidForm"
                    />
                    <ErrorMessage
                        name="content"
                        component="div"
                        className="invalidForm"
                    />
                </Form>
            </Formik>
        )
    }
}

export default ContactForm;