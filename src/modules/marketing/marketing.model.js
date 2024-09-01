import fs from 'fs'
import { Client } from 'whatsapp-web.js'
import { image as imageQr } from "qr-image";
import nodemailer from 'nodemailer'
import { EMAIL, EMAIL_APP_PASS, EMAIL_SERVICE } from '../../config';
const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL,
    pass: EMAIL_APP_PASS
  }
})

const client = new Client(
  {
    authStrategy: new LocalAuth()
  }
);
client.once('ready', () => {
  console.log('Client is ready!');
  fetch('localhost:3000/send-message', {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      'Content-Type': 'application/json'
    },
    body: `{"phone":${MESSAGE_CALLBACK_NUMBER},"message":"\'tamos ready"}`
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
});
client.on('qr', (qr) => {
  console.log('QR RECEIVED', qr);
  const path = `${process.cwd()}/public`;
  let qr_svg = imageQr(qr, { type: "svg", margin: 4 });
  qr_svg.pipe(fs.createWriteStream(`${path}/qr.svg`));
});
client.on('message_create', message => {
  console.log(message);
});
client.initialize();
const marketings = []
export class Marketing {
  static async getAll({ email }) {
    return marketings
  }

  static async getById({ id }) {
    const marketing = marketings.find(marketing => marketing.id == id)
    return marketing
  }


  static async createMessage(data) {
    const { message, phone } = data;
    const response = await client.sendMessage(`${phone}@c.us`, message);
    console.log({ response })
    const marketing = {
      ...data,
      id: marketings.length,
    }
    marketings.push(marketing)
    return marketing
  }
  static async createEmail(data) {
    const response = await transporter.sendMail({
      ...data,
      from: EMAIL,
    })
    console.log({ response })
    const marketing = {
      ...data,
      id: marketings.length,
    }
    marketings.push(marketing)
    return marketing
  }
  static async delete({ id }) {
    const marketingIndex = marketings.findIndex(marketing => marketing.id == id)
    if (marketingIndex === -1) throw { message: "Not found, marketing doesn't exists", status: 404 }
    marketings.splice(marketingIndex, 1)
    return true
  }

  static async update({ id, data }) {
    const marketingIndex = marketings.findIndex(marketing => marketing.id == id)
    if (marketingIndex === -1) throw { message: "Not found, marketing doesn't exists", status: 404 }
    marketings[marketingIndex] = {
      ...marketings[marketingIndex],
      ...data
    }
    return marketings[marketingIndex]
  }
}