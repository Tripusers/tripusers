import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { z } from "zod";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: Request) {
  try {
    const account = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_Password,
      },
    });
    await account.verify();

    const {
      data,
      type,
      senderEmail,
    }: { data: any; type: string; senderEmail: string } = await request.json();
    let html = ``,
      title = "";
    if (type == "")
      return NextResponse.json(
        {
          message: "Type of email not define",
        },
        {
          status: 401,
        }
      );
    if (type.toLocaleLowerCase() == "subscribe") {
      const schema = z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z
          .string()
          .min(10)
          .regex(/^.*\+\d{10,15}$/, {
            message:
              "The phone number is not valid; a country code is required.",
          }),
      });
      const error = schema.safeParse(data);
      if (!error.success) {
        return NextResponse.json(
          {
            message: "Data not valid",
            error,
          },
          {
            status: 400,
          }
        );
      }
      title = "Subscribe to tripusers";
      html = `<!DOCTYPE html>
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
      
      <head>
          <title></title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
          <style>
              * {
                  box-sizing: border-box;
              }
      
              body {
                  margin: 0;
                  padding: 0;
              }
      
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
              }
      
              #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
              }
      
              p {
                  line-height: inherit
              }
      
              .desktop_hide,
              .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0px;
                  overflow: hidden;
              }
      
              .image_block img+div {
                  display: none;
              }
      
              @media (max-width:520px) {
                  .desktop_hide table.icons-inner {
                      display: inline-block !important;
                  }
      
                  .icons-inner {
                      text-align: center;
                  }
      
                  .icons-inner td {
                      margin: 0 auto;
                  }
      
                  .mobile_hide {
                      display: none;
                  }
      
                  .row-content {
                      width: 100% !important;
                  }
      
                  .stack .column {
                      width: 100%;
                      display: block;
                  }
      
                  .mobile_hide {
                      min-height: 0;
                      max-height: 0;
                      max-width: 0;
                      overflow: hidden;
                      font-size: 0px;
                  }
      
                  .desktop_hide,
                  .desktop_hide table {
                      display: table !important;
                      max-height: none !important;
                  }
              }
          </style>
      </head>
      
      <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
          <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
              <tbody>
                  <tr>
                      <td>
                          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px; margin: 0 auto;"
                                              width="500">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                          <table class="image_block block-1" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad" style="width:100%;">
                                                                      <div class="alignment" align="center"
                                                                          style="line-height:10px">
                                                                          <div style="max-width: 460px;"><img
                                                                                  src="https://i.postimg.cc/0jpHQX8M/Asset-1-2x.png"
                                                                                  style="display: block; height: auto; border: 0; width: 100%;"
                                                                                  width="460"></div>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="heading_block block-2" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <h1
                                                                          style="margin: 0; color: #000000; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 21.599999999999998px;">
                                                                          <span class="tinyMce-placeholder">Website Enquiry -
                                                                              Subscribe&nbsp;</span>
                                                                      </h1>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="divider_block block-3" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div class="alignment" align="center">
                                                                          <table border="0" cellpadding="0" cellspacing="0"
                                                                              role="presentation" width="100%"
                                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                              <tr>
                                                                                  <td class="divider_inner"
                                                                                      style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;">
                                                                                      <span>&#8202;</span>
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-4" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Name: ${data.name}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-5" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Email: ${data.email}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-6" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Phone No.: ${data.phone}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="divider_block block-7" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div class="alignment" align="center">
                                                                          <table border="0" cellpadding="0" cellspacing="0"
                                                                              role="presentation" width="100%"
                                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                              <tr>
                                                                                  <td class="divider_inner"
                                                                                      style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;">
                                                                                      <span>&#8202;</span>
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="heading_block block-8" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <h3
                                                                          style="margin: 0; color: #000000; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                          <span class="tinyMce-placeholder"><a
                                                                                  href="https://www.tripusers.com/"
                                                                                  target="_blank"
                                                                                  style="text-decoration: underline; color: #7747ff;"
                                                                                  rel="noopener"><span
                                                                                      class="mce-content-body mce-edit-focus"
                                                                                      style="position: relative;"
                                                                                      id="45e66f84-2d57-4520-aae7-70e8488061c1"
                                                                                      data-position="10-0-7"
                                                                                      data-qa="tinyeditor-root-element"><span
                                                                                          class="tinyMce-placeholder">tripusers.com</span></span></a></span>
                                                                      </h3>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
      
                      </td>
                  </tr>
              </tbody>
          </table><!-- End -->
      </body>
      
      </html>`;
    } else if (type.toLocaleLowerCase() == "contact") {
      const schema = z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string(),
      });
      const error = schema.safeParse(data);
      if (!error.success) {
        return NextResponse.json(
          {
            message: "Data not valid",
            error,
          },
          {
            status: 400,
          }
        );
      }
      title = "Contact to tripusers";
      html = `<!DOCTYPE html>
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
      
      <head>
          <title></title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
          <style>
              * {
                  box-sizing: border-box;
              }
      
              body {
                  margin: 0;
                  padding: 0;
              }
      
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
              }
      
              #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
              }
      
              p {
                  line-height: inherit
              }
      
              .desktop_hide,
              .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0px;
                  overflow: hidden;
              }
      
              .image_block img+div {
                  display: none;
              }
      
              @media (max-width:520px) {
                  .desktop_hide table.icons-inner {
                      display: inline-block !important;
                  }
      
                  .icons-inner {
                      text-align: center;
                  }
      
                  .icons-inner td {
                      margin: 0 auto;
                  }
      
                  .mobile_hide {
                      display: none;
                  }
      
                  .row-content {
                      width: 100% !important;
                  }
      
                  .stack .column {
                      width: 100%;
                      display: block;
                  }
      
                  .mobile_hide {
                      min-height: 0;
                      max-height: 0;
                      max-width: 0;
                      overflow: hidden;
                      font-size: 0px;
                  }
      
                  .desktop_hide,
                  .desktop_hide table {
                      display: table !important;
                      max-height: none !important;
                  }
              }
          </style>
      </head>
      
      <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
          <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
              <tbody>
                  <tr>
                      <td>
                          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px; margin: 0 auto;"
                                              width="500">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                          <table class="image_block block-1" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad" style="width:100%;">
                                                                      <div class="alignment" align="center"
                                                                          style="line-height:10px">
                                                                          <div style="max-width: 460px;"><img
                                                                                  src="https://i.postimg.cc/0jpHQX8M/Asset-1-2x.png"
                                                                                  style="display: block; height: auto; border: 0; width: 100%;"
                                                                                  width="460"></div>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="heading_block block-2" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <h1
                                                                          style="margin: 0; color: #000000; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 21.599999999999998px;">
                                                                          <span class="tinyMce-placeholder">Website Enquiry -
                                                                              Contact </span>
                                                                      </h1>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="divider_block block-3" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div class="alignment" align="center">
                                                                          <table border="0" cellpadding="0" cellspacing="0"
                                                                              role="presentation" width="100%"
                                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                              <tr>
                                                                                  <td class="divider_inner"
                                                                                      style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;">
                                                                                      <span>&#8202;</span>
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-4" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Name: ${data.name}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-5" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Email: ${data.email}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-6" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Message: ${data.message}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="divider_block block-7" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div class="alignment" align="center">
                                                                          <table border="0" cellpadding="0" cellspacing="0"
                                                                              role="presentation" width="100%"
                                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                              <tr>
                                                                                  <td class="divider_inner"
                                                                                      style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;">
                                                                                      <span>&#8202;</span>
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="heading_block block-8" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <h3
                                                                          style="margin: 0; color: #000000; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                          <span class="tinyMce-placeholder"><a
                                                                                  href="https://www.tripusers.com/"
                                                                                  target="_blank"
                                                                                  style="text-decoration: underline; color: #7747ff;"
                                                                                  rel="noopener"><span
                                                                                      class="mce-content-body mce-edit-focus"
                                                                                      style="position: relative;"
                                                                                      id="45e66f84-2d57-4520-aae7-70e8488061c1"
                                                                                      data-position="10-0-7"
                                                                                      data-qa="tinyeditor-root-element"><span
                                                                                          class="tinyMce-placeholder">tripusers.com</span></span></a></span>
                                                                      </h3>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
      
                      </td>
                  </tr>
              </tbody>
          </table><!-- End -->
      </body>
      
      </html>`;
    } else if (type.toLocaleLowerCase() == "customizeyourtrip") {
      const schema = z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z
          .string()
          .min(10)
          .regex(/^.*\+\d{10,15}$/, {
            message:
              "The phone number is not valid; a country code is required.",
          }),
        date: z.string(),
        guest: z.string().min(0),
        message: z.string().min(1),
      });
      const error = schema.safeParse(data);
      if (!error.success) {
        return NextResponse.json(
          {
            message: "Data not valid",
            error,
          },
          {
            status: 400,
          }
        );
      }
      title = "Trip plan to tripusers";
      html = `<!DOCTYPE html>
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
      
      <head>
          <title></title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
          <style>
              * {
                  box-sizing: border-box;
              }
      
              body {
                  margin: 0;
                  padding: 0;
              }
      
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
              }
      
              #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
              }
      
              p {
                  line-height: inherit
              }
      
              .desktop_hide,
              .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0px;
                  overflow: hidden;
              }
      
              .image_block img+div {
                  display: none;
              }
      
              @media (max-width:520px) {
                  .desktop_hide table.icons-inner {
                      display: inline-block !important;
                  }
      
                  .icons-inner {
                      text-align: center;
                  }
      
                  .icons-inner td {
                      margin: 0 auto;
                  }
      
                  .mobile_hide {
                      display: none;
                  }
      
                  .row-content {
                      width: 100% !important;
                  }
      
                  .stack .column {
                      width: 100%;
                      display: block;
                  }
      
                  .mobile_hide {
                      min-height: 0;
                      max-height: 0;
                      max-width: 0;
                      overflow: hidden;
                      font-size: 0px;
                  }
      
                  .desktop_hide,
                  .desktop_hide table {
                      display: table !important;
                      max-height: none !important;
                  }
              }
          </style>
      </head>
      
      <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
          <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
              <tbody>
                  <tr>
                      <td>
                          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px; margin: 0 auto;"
                                              width="500">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                          <table class="image_block block-1" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad" style="width:100%;">
                                                                      <div class="alignment" align="center"
                                                                          style="line-height:10px">
                                                                          <div style="max-width: 460px;"><img
                                                                                  src="https://i.postimg.cc/0jpHQX8M/Asset-1-2x.png"
                                                                                  style="display: block; height: auto; border: 0; width: 100%;"
                                                                                  width="460"></div>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="heading_block block-2" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <h1
                                                                          style="margin: 0; color: #000000; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 21.599999999999998px;">
                                                                          <span class="tinyMce-placeholder">Website Enquiry -
                                                                              Customize your trip</span>
                                                                      </h1>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="divider_block block-3" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div class="alignment" align="center">
                                                                          <table border="0" cellpadding="0" cellspacing="0"
                                                                              role="presentation" width="100%"
                                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                              <tr>
                                                                                  <td class="divider_inner"
                                                                                      style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;">
                                                                                      <span>&#8202;</span>
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-4" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Name: ${data.name}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-5" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Email: ${data.email}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-6" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Phone No.: ${data.phone}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-7" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Travel Date.: ${data.date}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-8" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div
                                                                          style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                          <p style="margin: 0;">Tell us where you would like
                                                                              to go?: ${data.message}</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="divider_block block-9" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div class="alignment" align="center">
                                                                          <table border="0" cellpadding="0" cellspacing="0"
                                                                              role="presentation" width="100%"
                                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                              <tr>
                                                                                  <td class="divider_inner"
                                                                                      style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;">
                                                                                      <span>&#8202;</span>
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="heading_block block-10" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <h3
                                                                          style="margin: 0; color: #000000; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                          <span class="tinyMce-placeholder"><a
                                                                                  href="https://www.tripusers.com/"
                                                                                  target="_blank"
                                                                                  style="text-decoration: underline; color: #7747ff;"
                                                                                  rel="noopener"><span
                                                                                      class="mce-content-body mce-edit-focus"
                                                                                      style="position: relative;"
                                                                                      id="45e66f84-2d57-4520-aae7-70e8488061c1"
                                                                                      data-position="10-0-7"
                                                                                      data-qa="tinyeditor-root-element"><span
                                                                                          class="tinyMce-placeholder">tripusers.com</span></span></a></span>
                                                                      </h3>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
      
                      </td>
                  </tr>
              </tbody>
          </table><!-- End -->
      </body>
      
      </html>`;
    } else if (type.toLocaleLowerCase() == "package") {
      const schema = z.object({
        packageName: z.string(),
        adult: z.string().min(0),
        child: z.string().min(0),
        travelDate: z.string().min(0),
        name: z.string(),
        email: z.string(),
        mobile: z
          .string()
          .min(10)
          .regex(/^.*\+\d{10,15}$/, {
            message:
              "The phone number is not valid; a country code is required.",
          }),
      });
      const error = schema.safeParse(data);
      if (!error.success) {
        return NextResponse.json(
          {
            message: "Data not valid",
            error,
          },
          {
            status: 400,
          }
        );
      }
      title = "Select package";
      html = `
      <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
        }

        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
        }

        p {
            line-height: inherit
        }

        .desktop_hide,
        .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
        }

        .image_block img+div {
            display: none;
        }

        @media (max-width:520px) {
            .desktop_hide table.icons-inner {
                display: inline-block !important;
            }

            .icons-inner {
                text-align: center;
            }

            .icons-inner td {
                margin: 0 auto;
            }

            .mobile_hide {
                display: none;
            }

            .row-content {
                width: 100% !important;
            }

            .stack .column {
                width: 100%;
                display: block;
            }

            .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
            }

            .desktop_hide,
            .desktop_hide table {
                display: table !important;
                max-height: none !important;
            }
        }
    </style>
</head>

<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
        <tbody>
            <tr>
                <td>
                    <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <tbody>
                            <tr>
                                <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0"
                                        cellspacing="0" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px; margin: 0 auto;"
                                        width="500">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" width="100%"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                    <table class="image_block block-1" width="100%" border="0"
                                                        cellpadding="0" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                        <tr>
                                                            <td class="pad" style="width:100%;">
                                                                <div class="alignment" align="center"
                                                                    style="line-height:10px">
                                                                    <div style="max-width: 460px;"><img
                                                                            src="https://i.postimg.cc/0jpHQX8M/Asset-1-2x.png"
                                                                            style="display: block; height: auto; border: 0; width: 100%;"
                                                                            width="460"></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="heading_block block-2" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                        <tr>
                                                            <td class="pad">
                                                                <h1
                                                                    style="margin: 0; color: #000000; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 21.599999999999998px;">
                                                                    <span class="tinyMce-placeholder">Website Enquiry -
                                                                        Package </span>
                                                                </h1>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="divider_block block-3" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                        <tr>
                                                            <td class="pad">
                                                                <div class="alignment" align="center">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        role="presentation" width="100%"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td class="divider_inner"
                                                                                style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;">
                                                                                <span>&#8202;</span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="paragraph_block block-4" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0;">Package Name: ${data.packageName}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="paragraph_block block-5" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0;">Adults: ${data.adult}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="paragraph_block block-6" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0;">Children: ${data.child}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="paragraph_block block-7" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0;">Travel Date.: ${data.travelDate}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="paragraph_block block-8" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0;">Name: ${data.name}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="paragraph_block block-9" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0;">Email: ${data.email}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="paragraph_block block-10" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#444a5b;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0;">Phone No.: ${data.mobile}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="divider_block block-11" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                        <tr>
                                                            <td class="pad">
                                                                <div class="alignment" align="center">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        role="presentation" width="100%"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td class="divider_inner"
                                                                                style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;">
                                                                                <span>&#8202;</span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table class="heading_block block-12" width="100%" border="0"
                                                        cellpadding="10" cellspacing="0" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                        <tr>
                                                            <td class="pad">
                                                                <h3
                                                                    style="margin: 0; color: #000000; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                    <span class="tinyMce-placeholder"><a
                                                                            href="https://www.tripusers.com/"
                                                                            target="_blank"
                                                                            style="text-decoration: underline; color: #7747ff;"
                                                                            rel="noopener"><span
                                                                                class="mce-content-body mce-edit-focus"
                                                                                style="position: relative;"
                                                                                id="45e66f84-2d57-4520-aae7-70e8488061c1"
                                                                                data-position="10-0-7"
                                                                                data-qa="tinyeditor-root-element"><span
                                                                                    class="tinyMce-placeholder">tripusers.com</span></span></a></span>
                                                                </h3>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </td>
            </tr>
        </tbody>
    </table><!-- End -->
</body>

</html>`;
    }

    const sendToSender = await account.sendMail({
      from: process.env.EMAIL,
      to: senderEmail,
      html,
      subject: title,
    });
    const sendToSelf = await account.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      html,
      subject: title,
    });
    return NextResponse.json({
      message: "Check your email inbox!",
      ServerMessage: {
        sendToSender: sendToSender.response,
        sendToSelf: sendToSelf.response,
      },
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        message: "Internal server error",
        error: e.message,
      },
      {
        status: 500,
      }
    );
  }
}
