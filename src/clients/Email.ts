import { Configuration, EmailsApi, EmailMessageData } from '@elasticemail/elasticemail-client-ts-axios';
import { render } from '@react-email/render';
import { WelcomeEmail } from '../EmailTemplates/Welcome';

type EmailData = {
    from?: string;
    to: string;
    subject: string;
    text?: string;
    name?: string;
    htmlContent?: string;
}

export const SendEmail = ({ from, to, name, subject, text }: EmailData) => {
    const config = new Configuration({
        apiKey: "88A06BCEF151E493AE788F91706CEE03B22832C31DE956088F4F80D6F8544845E510C7DB45E51F686EAEB29418FEA13C"
    });

    const emailsApi = new EmailsApi(config);
    const emailHtml = render(WelcomeEmail({ name: "ashish" }));
    console.log(emailHtml)

    const emailMessageData = {
        Recipients: [
            {
                Email: to,
                Fields: {
                    name: name
                }
            }
        ],
        Content: {
            Body: [
                {
                    ContentType: "HTML",
                    Charset: "utf-8",
                    Content: emailHtml
                },
            ],
            From: "ashdevelop101@gmail.com",
            Subject: subject
        }
    };

    const sendBulkEmails = (emailMessageData: EmailMessageData): void => {
        emailsApi.emailsPost(emailMessageData).then((response) => {
            console.log('API called successfully.');
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
    };
    //@ts-ignore
    sendBulkEmails(emailMessageData)
}