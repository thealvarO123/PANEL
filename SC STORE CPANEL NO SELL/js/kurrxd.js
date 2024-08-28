

require('../config/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const cheerio = require("cheerio");
const chalk = require("chalk");
const crypto = require("crypto");
const axios = require("axios");
const moment = require("moment-timezone");
const fetch = require("node-fetch");
const Jimp = require("jimp");
const util = require("util");
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom } = require('./lib/functions')
//module.exports = kurrxd = async (kurrxd, m, chatUpdate, store) => {
module.exports = async (kurrxd, m, chatUpdate, store) => {
   // console.log(m)
try {    
//YASS GMG
const mess = JSON.parse(fs.readFileSync('./mess.json'));
const pler = JSON.parse(fs.readFileSync('./js/db/idgrup.json').toString())
   const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
    const db_error = JSON.parse(fs.readFileSync('./database/error.json'));
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
    const { isUrl, getRandom, getGroupAdmins, runtime, sleep, jsonformat, reSize, makeid, fetchJson, getBuffer } = require("../js/lib/myfunc");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../js/lib/addlist');
    const jangan = m.isGroup ? pler.includes(from) : false	
if (!kurrxd.public) {
if (!m.key.fromMe) return
}
    const { addSaldo, minSaldo, cekSaldo } = require("../function/deposit");
    const payment = "./config/setting"
    // Database
let db_saldo = JSON.parse(fs.readFileSync("./options/saldo.json"));
let depositPath = "./options/deposit/"
//nof ahahha
const type = getContentType(m.message)

const body = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")

var budy = (typeof text == 'string' ? text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const chath = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const content = JSON.stringify(m.message)
const { quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''

const pushname = m.pushName || "No Name"
const botNumber = kurrxd.user.id.split(':')[0]
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m
const owner = JSON.parse(fs.readFileSync('./config/seller.json').toString())
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await kurrxd.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
var sticSukses = (hehe) => {
ano = fs.readFileSync('./basezrill/stickernye/SuksesCok.webp')
kurrxd.sendImageAsSticker(from, ano, m, { packname: global.packname, author: global.author })
}
if (!kurrxd.public) {
if (!m.key.fromMe) return
}
    if (m.message) {
kurrxd.readMessages([m.key])
    }
    const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
    //tourl
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../js/lib/exif')
    //ANTILINK
const isAntiLink = antilink.includes(from) ? true : false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const reply = (teks) => {
kurrxd.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": global.namabot,"body": `👋🏻 Hai kak ${pushname}`, "previewType": "PHOTO","thumbnail": thumbnail,"sourceUrl": `https://youtu.be/ToI4Yo2UzKw`}}}, { quoted: m})}
//// welcom
///ANTI LINK YAH
//Anti Link
//Antilink
if (isGroup && isAntiLink && isBotGroupAdmins){
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
if (!isBotGroupAdmins) return //reply('Untung gw bukan admin')
if (isCreator) return //reply('Untung lu owner ku:v😙')
if (fromMe) return //reply('Gw bebas share link')
await kurrxd.sendMessage(from, { delete: m.key })
reply(`*「 GROUP LINK DETECTOR 」*\n\nTerdeteksi anak kontol kirim link grup, sorry dek linknya gw hapus`)
//kurrxd.groupParticipantsUpdate(from, [sender], "remove")
}
}
    
    //yass pedia
const { color, bgcolor, mycolor } = require('../js/lib/color')
if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
console.log(command)
try {
ppuser = await chanzx.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}
const nyoutube = ('©YogzzDevX')  //ubah di config biar ngk emr
//━━━━━━━━━━━━━━━[ DIWNLOAD YTMP3 ]━━━━━━━━━━━━━━━━━//

async function sendkurrxdMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await kurrxd.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
 const dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isListMessage = dataListG.length !== 0 ? dataListG : dataList
    const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false

//logo MENTAHAN 
//twck make
		//WAKTU
 const kini = '```'    
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}

const fkont = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot Created By ${global.ownerName}\n`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${global.author},;;;\nFN:Halo ${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/9541e04b784aa9e991b0a.png' }}}}
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:YogzzDevX\n' // full name
            + 'ORG:Owner ChinoBotz;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6285807405071:+62 858-0740-5071\n' // WhatsApp ID + phone number
            + 'END:VCARD'
    //         prit = [
              //  {buttonId: 'daftar', buttonText: {displayText: 'DAFTAR RESELLER'}, type: 2}
              //]
              
            //   pritprit = {
               //   text: 'sepertinya kamu belum daftar resseler',
                 // footer: '©YogzzDevX',
               // buttons: prit,
               //   headerType: 1
             // }
switch (command) {
    case 'owner':
   
    kurrxd.sendMessage(
        from,
        { 
            contacts: { 
                displayName: 'Ini Adalah Contact Pembuat Bot Kak', 
                contacts: [{ vcard }] 
            }
        }
    )

        const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `https://s.id/YogzzDevX`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;YogzzDevX Assistant,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg' }}}}
function parseMentions(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
        function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = kurrxd.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
} else {
let res = kurrxd.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
        function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
        }
         //FUNCTION DEPOSIT


break
case 'gempa' :
{
let gempa = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
let teks =`   『 *"INFO GEMPA TERBARU"* 』\n\n*Tanggal :* "${gempa.Infogempa.gempa.Tanggal}"\n*Jam :* "${gempa.Infogempa.gempa.Jam}"\n*Date Time :* "${gempa.Infogempa.gempa.DateTime}"\n*Kordinat :* "${gempa.Infogempa.gempa.Coordinates}"\n*Lintang :* "${gempa.Infogempa.gempa.Lintang}"\n*Bujur :* "${gempa.Infogempa.gempa.Bujur}"\n*Getaran :* "${gempa.Infogempa.gempa.Magnitude}"\n*Kedalaman :* "${gempa.Infogempa.gempa.Kedalaman}"\n*Wilayah :* "${gempa.Infogempa.gempa.Wilayah}"\n*Potensi :* "${gempa.Infogempa.gempa.Potensi}"\n*Dirasakan :* "${gempa.Infogempa.gempa.Dirasakan}"\n\nSumber : https://data.bmkg.go.id\n\n*Rawrr*`
reply(teks)
}
break
case "pushmember":
          {
            if (!isCreator) throw reply(mess.OnlyOwner)
            if (!text) throw reply(`Menu ini hanya akan mengirim broadcast ke grup.\n\nContoh: ${prefix + command} dun ga bang? dunnn`)
            let getGroups = await kurrxd.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
              .slice(0)
              .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`);
            for (let i of anu) {
              await sleep(delayy);
              let txt = `${text}`;
              kurrxd.sendText(i, txt);
            }
            reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`);
          }
        break
case 'saldo':{
reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk buysrv_
_Tidak bisa ditarik atau transfer_!`)
}
        break
case 'deposit': case 'depo':{
let depo = `Hai *@${sender.split('@')[0]}*\nIngin melakukan deposit saldo? Silahkan pilih payment yang tersedia dibawah!
*- ${prefix}dana*
*- ${prefix}gopay*
*- ${prefix}ovo*
*- ${prefix}qris*`
kurrxd.sendMessage(from, {image: fs.readFileSync('./media/qris.jpg'), caption: depo, mentions : [sender]}, { quoted: m })
}
break
case 'autoread':
if (!isCreator) return reply(mess.OnlyOwner)
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on'){
autoread = false
reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off'){
autoread = true
reply(`Berhasil mengubah autoread ke ${q}`)
}
break
case 'cuaca':
if (!q) throw `_Contoh_\n${prefix+command} palembang`
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*

*Nama:* ${cuaca.name + "," + cuaca.sys.country}
*Longitude:* ${cuaca.coord.lon}
*Latitude:* ${cuaca.coord.lat}
*Suhu:* ${cuaca.main.temp + " C"}
*Angin:* ${cuaca.wind.speed + " m/s"}
*Kelembaban:* ${cuaca.main.humidity + "%"}
*Cuaca:* ${cuaca.weather[0].main}
*Keterangan:* ${cuaca.weather[0].description}
*Udara:* ${cuaca.main.pressure + " HPa"}`
reply(text_cuaca)
break

case 'pushjeda' : {
          if (!text) return reply(`Example ${prefix}${command} Sv YogzzDevX`)
          if (!isCreator) return reply(mess.OnlyOwner)
          if (!m.isGroup) return reply(mess.OnlyGroup)
          let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
          let count = get.length;
          let sentCount = 0;
          reply('*_Sedang Push Kontak Om..._*');
          for (let i = 0; i < get.length; i++) {
            setTimeout(function() {
              kurrxd.sendMessage(get[i], { text: text });
              count--;
              sentCount++;
              if (count === 0) {
                reply(`*_Succes Push Kontak Sayangku:_*\n*_Jumlah Pesan Terkirim: ${sentCount}_*`);
              }
            }, i * delayy);
          }
        }
        break
        case 'pushid' : {
          if (!isCreator) return reply(mess.OnlyOwner)
          let idgc = text.split("|")[0]
          let pesan = text.split("|")[1]
          if (!idgc && !pesan) return reply(`Example: ${prefix + command} idgc|pesan`)
          let metaDATA = await kurrxd.groupMetadata(idgc).catch((e) => {reply(e)})
          let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
          let count = getDATA.length;
          let sentCount = 0;
          reply('*_Sedang Push ID..._*')
          for (let i = 0; i < getDATA.length; i++) {
            setTimeout(function() {
              kurrxd.sendMessage(getDATA[i], { text: pesan });
              count--;
              sentCount++;
              if (count === 0) {
                reply(`*_Semua pesan telah dikirim!_*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
              }
            }, i * delayy);
          }
        } 
        break
case 'addsaldo':{
if (!isCreator) return reply('F')
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
}
break   
case 'promote': {
if (!isCreator) return reply('Boleh Aku Tanya ? Kamu Owner ?')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kurrxd.groupParticipantsUpdate(from, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
        break

case 'minsaldo':
if (!isCreator) reply(mess.OnlyOwner)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
//=================================================//
case 'demote': {
if (!isCreator) return reply('Boleh Aku Tanya ? Kamu Owner ?')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kurrxd.groupParticipantsUpdate(from, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
        break
case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': {
if (!m.isGroup) return reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
kicee = m.sender
await kurrxd.groupParticipantsUpdate(from, [kicee], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
kurrxd.sendMessage(from, {text:`「 Detect Toxic 」\n\n@${kicee.split("@")[0]} Telah dikick karena Telah Toxic di group ini`, contextInfo:{mentionedJid:[kicee]}}, {quoted:m})
}
        break
case 'restseler':
if (!isCreator) return reply(`sorry anda sepertinya bukan pemilik bot`)
owner.splice('[]')
fs.writeFileSync('./config/seller.json', JSON.stringify(owner))
reply(`SUKSES✅`)
        break
case 'listseler':{
if (!isCreator) return reply(`sorry anda sepertinya bukan pemilik bot`)
let listusr =`*List user Resler Panel YogzzDevX*\n\ntotal user : ${owner.length}\n`
var no = 1
for (let x of owner) {
listusr +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listusr +=`Untuk menghapus user/member\nKetik ${prefix}delusr 628xxx/@tag`
reply(listusr)
}
        
        //random
        break
//=================================================//
case 'ping': {
kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}
` }, { quoted: m })
}
    break
//=================================================//

//=================================================//
case 'infopanel': {
if (!m.isGroup) return reply('Buat Di Group Bodoh')
kurrxd.sendMessage(from, { text : `◎ © Hay Kak ${pushname} 

📮 _*Syarat & Ketentuan*_

1. _Fitur lupa password sudah bisa digunakan jadi pastikan email aktif kalian sudah di tambahkan di panel kami._
2. _Selalu backup data_
3. _Jangan beritahukan user password kepada orang lain ( kami tidak bertanggung jawab dengan hal ini )_

_*sebelumnya kami mengalami kasus dimana user kami menjual akunnya ke orang lain dan selang beberapa hari meminta kami untuk reset password hal ini membuat nama panel kami dibilang scam untuk menanggulangi hal ini kami tidak akan lagi membantu melakukan reset password.*` , mentions: participants.map(a => a.id)}, { quoted:m })
}   
        break
case 'buyadmin':{
if (cekSaldo(sender,db_saldo) < 30000) return kurrxd.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!q.split(',')[0]) return reply(`Ex : ${prefix+command} username\n\nContoh :\n${prefix+command} phnxstr`)
let d = (await kurrxd.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 30000, db_saldo)
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": q.split(',')[0],
"username": q.split(',')[1],
"first_name": q.split(',')[1],
"last_name": "Memb",
"language": "en",
"root_admin": true,
"password": "adminpanel",
})
})
let res = await f.json();
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
kurrxd.sendMessage(from, { text: `*Rules :*
*- Jangan Hapus Akun Admin Lain*
*- Jangan Colong SC Buyer panel*
*- Jangan membuat Panel Terlalu besar*
*- Jangan Membuat Akun Admin Panel Lain*
*- Jangan Otak Atik panel*\n*Melanggar Salah Satu Rules Di Atas Langsung Di Hapus Admin Panel Nya*\n*mohon ikuti rules nya @${sender.split('@')[0]}*`, mentions: [sender]}, { quoted: m })
kurrxd.sendMessage(sender, { text: `*DATA AKUN ADMIN PANEL ANDA*\n\n*ID:* ${res.attributes.id}\n*EMAIL:* ${res.attributes.email}\n*USERNAME:* ${res.attributes.username}\n*PASSWORD:* adminpanel\n*LOGIN:* ${domain}`, mentions: [sender]}, { quoted: m })
}
      
    break
    case 'chan':{
        reply('bot aktif')
    }
        break
case 'help':
case 'botmenu':
case 'menu':{
const mark_slebew = '0@s.whatsapp.net'
var footer_nya =`Creator by - ${global.ownerName}`
let menu = (`*┌◦ Name:* ${m.pushName}
*│◦ Number:* ${sender.split("@")[0]}
*│◦ Owner Number:* ${global.kontakOwner}
*│◦ Owner Name :* ${global.ownerName}
*│◦ Bot Name:* ${global.author}
*│◦ Time:* ${time2}
*└◦ Runtime :* ${runtime(process.uptime())} 

– *O W N E R*

┌ ◦ ${prefix}addgc *only grup*
│ ◦ ${prefix}delgc *only grup*
│ ◦ ${prefix}restseler *restart seler*
│ ◦ ${prefix}listseler *show all seller*
│ ◦ ${prefix}addsaldo *number,amount*
│ ◦ ${prefix}minsaldo *number,amount*
│ ◦ ${prefix}addseller *nomor/tag*
│ ◦ ${prefix}delseller *nomor/tag*
│ ◦ ${prefix}pushkontak *teks*
│ ◦ ${prefix}pushjeda *teks*
│ ◦ ${prefix}pushid *teks*
│ ◦ ${prefix}pushmember *teks*
│ ◦ ${prefix}setppbot *image*
│ ◦ ${prefix}listonline *show all online*
│ ◦ ${prefix}listpc *show all pc bot*
│ ◦ ${prefix}creategroup
│ ◦ ${prefix}self *mode seleb*
└ ◦ ${prefix}public *mode prenli*

– *G R O U P*

┌ ◦ ${prefix}hidetag *teks*
│ ◦ ${prefix}kick *tag/reply*
│ ◦ ${prefix}antilink *on/off*
│ ◦ ${prefix}lgc *get link group*
│ ◦ ${prefix}resetlink 
│ ◦ ${prefix}promote *tag/reply*
│ ◦ ${prefix}demote *tag/reply*
│ ◦ ${prefix}welcome *on/off*
│ ◦ ${prefix}tagall *teks*
│ ◦ ${prefix}setdesc *teks*
│ ◦ ${prefix}setnama *teks* 
│ ◦ ${prefix}id *get id group*
│ ◦ ${prefix}group *open/close*
│ ◦ ${prefix}sendgc *number*
│ ◦ ${prefix}daftar *daftar seller*
│ ◦ ${prefix}listgroup *show all group*
└ ◦ ${prefix}peraturan *rules bot*

– *R E S E L L E R*

┌ ◦ ${prefix}1gb *name,number*
│ ◦ ${prefix}2gb *name,number*
│ ◦ ${prefix}3gb *name,number*
│ ◦ ${prefix}4gb *name,number*
│ ◦ ${prefix}5gb *name,number*
│ ◦ ${prefix}6gb *name,number*
│ ◦ ${prefix}7gb *name,number*
│ ◦ ${prefix}8gb *name,number*
│ ◦ ${prefix}10gb *name,number*
└ ◦ ${prefix}unli *only owner*

– *P A N E L*

┌ ◦ ${prefix}addusr 
│ ◦ ${prefix}addusr2
│ ◦ ${prefix}addusr3
│ ◦ ${prefix}createadmin
│ ◦ ${prefix}addsrv
│ ◦ ${prefix}detusr
│ ◦ ${prefix}detsrv
│ ◦ ${prefix}delusr
│ ◦ ${prefix}delsrv
│ ◦ ${prefix}ramlist
│ ◦ ${prefix}infopanel
└ ◦ ${prefix}webpanel

– *D E P O S I T*

┌ ◦ ${prefix}deposit/depo 
│ ◦ ${prefix}buyakn *button*
│ ◦ ${prefix}buysrv 
└ ◦ ${prefix}buyadmin 

– *S T I C K E R*

┌ ◦ ${prefix}sticker/s
│ ◦ ${prefix}qc *teks*
│ ◦ ${prefix}emojimix *🤩+😱*
└ ◦ ${prefix}emojimix2 🤩

– *S T O R E*

┌ ◦ ${prefix}addlist *name@list*
│ ◦ ${prefix}dellist *name*
│ ◦ ${prefix}list/shop
│ ◦ ${prefix}proses 
└ ◦ ${prefix}done

– *M A I N*

┌ ◦ ${prefix}pin *teks*
│ ◦ ${prefix}sewa
│ ◦ ${prefix}confes *teks*
│ ◦ ${prefix}cuaca *kota*
│ ◦ ${prefix}gempa
│ ◦ ${prefix}owner *whatsapp admin*
│ ◦ ${prefix}yt *youtube owner*
│ ◦ ${prefix}google *teks*
└ ◦ ${prefix}req *teks*

– *P A Y M E N T*

┌ ◦ ${prefix}dana
│ ◦ ${prefix}qris
│ ◦ ${prefix}gopay
│ ◦ ${prefix}ovo
└ ◦ ${prefix}donasi

– *V E R I F Y*

┌ ◦ ${prefix}verify *62xx/@*
│ ◦ ${prefix}banned *62xx/@*
│ ◦ ${prefix}logout *62xx/@*
└ ◦ ${prefix}kenon  *62xx/@*`)
kurrxd.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${global.author}`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./media/reply.png'),
sourceUrl:`https://chat.whatsapp.com/CcLQaIL4iIwCwVCqcObAcg`
}}, image: fs.readFileSync('./media/rawr.jpg'), caption: menu}, { quoted: m })

}
break
case 'buyakn':{
if (cekSaldo(sender,db_saldo) < 4000) return kurrxd.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!q.split(',')[0]) return reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} YasaPedia@gmail.com,phnxstr`)
if (!q.split(',')[1]) return reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} phnxstr1@gmail.com,phnxstr`)
let d = (await kurrxd.onWhatsApp(sender.split('@')[0]))[0] || {}
let psswd = d.exists ? require("crypto").randomBytes(5).toString('hex') : username+'7739'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": q.split(',')[0],
"username": q.split(',')[1],
"first_name": q.split(',')[1],
"last_name": "Memb",
"language": "en",
"password": psswd
})
})
let res = await f.json();
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
let sections = [{
title: "PILIHAN PAKET",
rows: [
{ title: 'PAKET G1', rowId: `${prefix}buysrv 1,${res.attributes.id}`, description: 'RAM 1GB / DISK 1GB / CPU 40%' },
{ title: 'PAKET G2', rowId: `${prefix}buysrv 2,${res.attributes.id}`, description: 'RAM 2GB / DISK 2GB / CPU 70%' },
{ title: 'PAKET G3', rowId: `${prefix}buysrv 3,${res.attributes.id}`, description: 'RAM 3GB / DISK 3GB / CPU 100%' },
{ title: 'PAKET G4', rowId: `${prefix}buysrv 4,${res.attributes.id}`, description: 'RAM 4GB / DISK 4GB / CPU 120%' },
{ title: 'PAKET G5', rowId: `${prefix}buysrv 5,${res.attributes.id}`, description: 'RAM 5GB / DISK 5GB / CPU 140%' },
{ title: 'PAKET G6', rowId: `${prefix}buysrv 6,${res.attributes.id}`, description: 'RAM 6GB / DISK 6GB / CPU 170%' },
{ title: 'PAKET G7', rowId: `${prefix}buysrv 7,${res.attributes.id}`, description: 'RAM 7GB / DISK 7GB / CPU 200%' },
{ title: 'PAKET G8', rowId: `${prefix}buysrv 8,${res.attributes.id}`, description: 'RAM 8GB / DISK 8GB / CPU 225%' },
{ title: 'PAKET G9', rowId: `${prefix}buysrv 9,${res.attributes.id}`, description: 'RAM 10GB / DISK 10GB / CPU 250%' }
]}]
kurrxd.sendMessage(from, { text: `*SUCCESSFULLY BUY USER*\n\n*TYPE:* user\n\n*ID:* ${res.attributes.id}\n*UUID:* ${res.attributes.uuid}\n*USERNAME:* ${res.attributes.username}\n*EMAIL:* ${res.attributes.email}\n*FIRST NAME/LAST NAME:* ${res.attributes.first_name}/${res.attributes.last_name}\n*CREATED AT:* ${res.attributes.created_at}\n\n*Password telah dikirim ke @${sender.split('@')[0]}*`, mentions: [sender]}, { quoted: m })
kurrxd.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${res.attributes.email}\n*USERNAME:* ${res.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *CLIENT YogzzDevX Team* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH`, buttonText: 'BUY SERVER', sections })
}    
        
        break
//=================================================//
case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = '6285852129763@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
              // let buttons = [{ buttonId: 'tesrow', buttonText: { displayText: 'MENU‡' }, type: 1 },{ buttonId: 'DONASI', buttonText: { displayText: 'DONASI' }, type: 1 }]
            await kurrxd.sendButtonText(ownernya,  pjtxt, nyoutube, m, {mentions: ments, quoted: m })
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*`
            await kurrxd.sendButtonText(from, akhji, nyoutube, m, {mentions: ments, quoted: m })
            }
            break  
        //hentai 18+
case 'sewa': 
reply(`◎ © Hay Kak ${pushname} 
Sewa Bot ? Hubungi Admin Untuk Nego Wa.me/6285807405071`)
        // FUNCTION DEPOSIT
   break
case 'shop': case 'list':
if (!isGroup) return reply(mess.OnlyGrup)
if (isCreator) return reply(mess.OnlyOwner)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
let tekny = `Hai @${sender.split("@")[0]}\nBerikut list item yang tersedia di group ini!\n\nSilahkan ketik nama produk yang diinginkan!\n\n`
for (let i of arr_rows){
tekny += `Produk : ${i.title}\n\n`
}
var listMsg = {
text: tekny,
mentions:[sender]
}
kurrxd.sendMessage(from, listMsg)
case 'addlist':
        if (!isCreator) return reply(`di grup`)
if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) 
if (!isGroupAdmins && !isCreator) return reply(mess.GrupAdmin)
        var get_data_respon = getDataResponList(from, chats, db_respon_list)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Berhasil menambah List menu : *${args1}*`)

break
case 'dellist':{
    if (!isCreator) return reply(`di grup bang`)
if (!isGroup && !isCreator) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isCreator) return reply(mess.GrupAdmin)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: `#hapuslist ${x.key}`
})
}
}
var listMsg = {
text: `Hai @${sender.split("@")[0]}`,
buttonText: 'YogzzDevX Store ',
footer: 'Silahkan pilih list yg mau dihapus',
mentions: [sender],
sections: [{
title: groupName, rows: arr_rows
}]
}
kurrxd.sendMessage(from, listMsg)
}
        break
case 'yt':
case 'youtube':
	kurrxd.sendMessage(from, 
{text: `Jangan Lupa Subscriber yah kak😉🙏
*Link* : https://youtube.com/@YogzzDevX`},
{quoted: m})
        break
    case 'gc':
    case 'group':
	kurrxd.sendMessage(from, 
{text: `*Group YogzzDevX*\n
Group YogzzDevX : https://chat.whatsapp.com/L9iLy6q6cOAGaCg0leCMOs
Griup ChinoBotz : https://chat.whatsapp.com/IEgCJYuhmKkGm2KjglHDsp`},
{quoted: m})
        break
case 'hapuslist':
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
  break
//fitur menfess// main menu
        case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kk ada Menfess nih!!\n\nDari :  _${saking}_  \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

			//	 var button = [{ buttonId: `menfesconfirm`, buttonText: { displayText: `CONFIRM‡` }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: `SEWABOT‡` }, type: 1 }]
					kurrxd.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, footer: `YogzzDevX\nhttps://s.id/YogzzDevX` })
				reply(`Sukses Mengirim Menfess!!`)     
        break

			case 'menfesconfirm':
 				 kurrxd.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🌹`})
				  reply(`Terimakasih Menfess Telah Diterima.`)
        case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await kurrxd.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 kurrxd.sendTextWithMentions(from, teks, m)
        }
        break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    kurrxd.sendText(from, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
  
   
                break
       break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = '6285852129763@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
             //  let buttons = [{ buttonId: 'hehe', buttonText: { displayText: 'Makasih Laporannya :/' }, type: 1 }]
            await kurrxd.sendButtonText('6285807405071@s.whatsapp.net', pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Laporan Anda Telah Terkirim Ke Owner @${ownernya.split('@')[0]}\n*Terima Kasih Atas Laporannya🙏*\n_(Nomermu Akan Terblokir Jika Laporan Hanya Di Buat Buat)_`
            await kurrxd.sendButtonText(from, akhji, nyoutube, m, {mentions: ments})
            }
        break
       ///top up
case 'script': case 'sc':{
let text_sc =`_${pushname}👋_\n`
text_sc += "*SCRIPT NO ENC*\n"
text_sc += "Mau beli scriptnya?\n\n"
text_sc += "*Contact Person 📞*\n"
text_sc += "https://wa.me/6285807405071\n\n"
text_sc += "*Pembayaran Via* 💳\n"
text_sc += "_Qris / Dana / Gopay / Ovo_\n\n"
text_sc += "*Harga : Rp25.000 (25k)*\n"
text_sc += "*Harga terlalu mahal?*\n"
text_sc += "*Sans nego dikit gpp*\n\n"
text_sc += "Sudah termasuk tutorial.\n"
text_sc += "Size script sudah ringan.\n"
text_sc += "Anti ngelag/delay."
reply(text_sc)
}
        
        break
case 'isi':{
lrm = `${kini}
         *YogzzDevX Store*
   ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
user:
nomor:
ram:
contoh : ram,namamu,62xxx
`
//let buttons00 = [
//{buttonId: '#proses', buttonText: {displayText: '️SUDAH DI ISI KAK'}, type: 2},
//  ]
  
  //let buttonMessage00 = {
     // text: lrm,
    //  footer: 'YogzzDevX',
    //  buttons: buttons00,
    //  headerType: 00
//  }
kurrxd.sendMessage(from, {text : lrm}, {quoted: m})
}
      
        break
// INI FITUR STORE GAME YA JING //
        case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                kurrxd.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
        break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await kurrxd.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
        break
case 'antilink':{
if (!isGroup) return reply(mess.OnlyGroup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return reply('Antilink sudah aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Activate Antilink In This Group')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return reply('Antilink belum aktif')
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Disabling Antilink In This Group')
} else { reply('Kata kunci tidak ditemukan!') }
}
break
        case "creategroup":{
if (!isCreator) return reply('khusus own')
if (!text) return reply("Nama groupnya?")
let cret = await kurrxd.groupCreate(text, [])
let response = await kurrxd.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
kurrxd.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
kurrxd.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 3000)
}
      
break
     
        break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await kurrxd.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
        }
        break
//=================================================//
case 'listpc': {
if (!isCreator) return reply(mess.OnlyOwner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 kurrxd.sendTextWithMentions(from, teks, m)
}
        break
//=================================================//
//=================================================//
case 'assalamualaikum': case 'p': {
reply(`Waalaikumsalam`)
}
       break

//=================================================//
//=================================================//
case 'ss': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
kurrxd.sendMessage(from, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:m }).catch((err) => reply(jsonformat('*LINK NYA SLUR*')))
}
        break
case 'qc':{ 
if (!isCreator) return reply('Khusus creator bot')
if (!quoted){
try {
var linkppuserp = await kurrxd.profilePictureUrl(mentionUser[0], 'image')
} catch {
var linkppuserp = 'https://telegra.ph/file/e323980848471ce8e2150.png'
}
const getname = await kurrxd.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
 {
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
 "url": linkppuserp
}
},
"text": quotedMsg.chats,
"replyMessage": {}
 }
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
var opt = { packname: "©Sticker By", author: "YogzzDevX Assistant" }
kurrxd.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q){
try {
var linkppuserp = await kurrxd.profilePictureUrl(sender, 'image')
} catch {
var linkppuserp = 'https://telegra.ph/file/e323980848471ce8e2150.png'
}
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
 {
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
 "url": linkppuserp
}
},
"text": q,
"replyMessage": {}
 }
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
var opt = { packname: "©Sticker By", author: "YogzzDevX Assistant" }
kurrxd.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${command} text atau reply pesan dengan perintah ${command}`)
}
}
        break
case 'win':
if (!isCreator) return reply(mess.OnlyOwner)
if (!m.isGroup) return reply(mess.OnlyGrup)
let member = participants.map(u => u.id)
let pemenang = member[Math.floor(Math.random() * member.length)]
let menst = [pemenang]
asu = `Selamat Kepada Pemenang Giveway👻 @${pemenang.split('@')[0]}`
kurrxd.sendMessage(from, {text : asu}, {quoted : m})
        break
      case 'group' : {
        if (!isCreator) return reply(mess.OnlyOwner)
        if (!m.isGroup) return reply(mess.OnlyGrup)
        if (!isBotAdmins) return reply(mess.BotAdmin)
        if (!isAdmins) return reply(mess.OnlyAdmin)
        if (text === 'close') {
          await kurrxd.groupSettingUpdate(from, 'announcement').then ((res) => reply('Waduh Group Di Tutup, Mau Ngapain Min?😂')).catch ((err) => reply(jsonformat(err)))
        } else if (text === 'open') {
          await kurrxd.groupSettingUpdate(from, 'not_announcement').then ((res) => reply('Akhirnya Di Buka Juga😂')).catch ((err) => reply(jsonformat(err)))
        }
         // let buttons = [
           // { buttonId: prefix + 'group open', buttonText: { displayText: 'Open' }, type: 1 },
          //  { buttonId: prefix + 'group close', buttonText: { displayText: 'Close' }, type: 1 },
     //     ]
        //  await kurrxd.sendButtonText(from, 'Group Mode', packname, m)
     //   }
      }
        break
           case 'addgc':
if (!isGroup) return reply(mess.OnlyGroup)         
if (!isCreator) return reply(mess.OnlyOwner)
pler.push(from)
fs.writeFileSync('./js/db/idgrup.json', JSON.stringify(pler))
reply('Sukses the group can create a domain')
        break
  case 'delgc':
if (!isGroup) return reply(mess.OnlyGroup)         
if (!isCreator) return reply(mess.OnlyOwner)
var ini = pler.indexOf(from)
pler.splice(ini, 1)
fs.writeFileSync('./js/db/idgrup.json', JSON.stringify(pler))
        reply('the group can no longer access the domain')
        break
case 'join':{   
if (!isCreator) return reply(mess.OnlyOwner)
if (!q) return reply(`Kirim perintah ${prefix+command} _linkgrup_`)
var ini_urrrl = q.split('https://chat.whatsapp.com/')[1]
var data = await kurrxd.groupAcceptInvite(ini_urrrl)
reply('*Sukses Join The Group..*')
}

        break
case 'runtime':
reply(`*Runtime :* ${runtime(process.uptime())}`)
        break
case 'google': {
if (!isCreator) return reply('Khusus creator bot')
                if (!text) throw `Example : ${prefix + command} Apa Arti Sebenarnya Dari Cinta`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
}
       
break
case 'panel1':
case 'panelku':{
let teq =`_• *Panel Hosting Bot By YogzzDevX*_

_*⎇ PAKET G1*_
_1GB RAM/1GB Disk/40% CPU_
_Rp4.000,00/1 BULAN_
_*⎇ PAKET G2*_
_2GB RAM/2GB Disk/60% CPU_
Rp6.000,00/1 BULAN_
_*⎇ PAKET G3*_
_3GB RAM/3GB Disk/100% CPU_
_Rp8.000,00/1 BULAN_
_*⎇ PAKET G4*_
4GB RAM/4GB Disk/120% CPU
Rp10.000,00/1 BULAN
_*⎇ PAKET G5*_
_5GB RAM/5GB Disk/140% CPU_
_Rp12.000,00/1 BULAN_
_*⎇ PAKET G6*_
_6GB RAM/6GB Disk/170% CPU_
_Rp14.000.00/1 BULAN_
_*⎇ PAKET G7*_
_7GB RAM/7GB Disk/200% CPU_
_Rp16.000.00/1 BULAN_
_*⎇ PAKET G8*_
_8GB RAM/8GB Disk/225% CPU_
_Rp18.000.00/1 BULAN_
_*⎇ PAKET G9*_
_10GB RAM/8GB Disk/250% CPU_
_Rp20.000.00/1 BULAN_

*ADMIN PANEL:* _30K/BULAN_
*PARTNER PANEL:* _50K/BULAN_

*ADA HARGA ADA KUALITAS*

*NOTE:*
_- Free script pushkontak 5 pilihan untuk pembelian panel 8gb keatas_
_- Free script create panel untuk pembelian admin panel_
_- Free script store private + akses web private panel cocok buat buka jasa runbot_
---------------------------------------

*Kegunaan Panel:*
_- Hosting Server Minecraft_
_- Hosting Bot Telegram,Discord,Whatsapp_
_- Bot Online 24/7 (Jika tidak ada eror dalam scriptnya)_
_- Saat Keluar Dari Browser/Chrome Bot Tetap On_
_- Hemat Kuota (Walau off data/wifi bot masih aktif)_
_- Bot Anti Delay_
_- Gak Boros Penyimpanan_
_- Gak Ribet Buat Run Bot_
_- Bot Fast Respon_
_- Masih banyak lagi_

*OPEN RESSELER PANEL*

`
//let btn_menu = [
//{buttonId: `${prefix}pay`, buttonText: { displayText: '𝗢𝗞𝗘' }, type: 1 },
//]
kurrxd.sendMessage(from,
{text: teq},
//buttons: btn_menu},
{quoted: m })
}
        break
case 'done':
case 'don':{
if (!isGroup) return reply(mess.OnlyGroup)         
if (!isCreator && fromMe) return reply(mess.OnlyOwner)
let tek = (`「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih Telah order di *YogzzDevX*\nNext Order ya🙏`)
//let btn_menu = [
//{buttonId: `${prefix}aokeguwgw`, buttonText: { displayText: 'OKE THENKS👍' }, type: 1 },
//]
kurrxd.sendMessage(from,
{text: tek})
//buttons: btn_menu})
}
       break
case 'proses':{
if (!isGroup) return reply(mess.OnlyGroup)
let tek = (`「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n*--------------------------*\n\n*Pesanan ini akan diproses manual oleh admin,* *Tunggu admin memprosesnya🙏*\n*Atau Chat : Wa.me//${'6285807405071'}*`)
//let btn_menu = [
//{buttonId: `${prefix}aokeguwgw`, buttonText: { displayText: 'OKE SAYA TUNGGU👍' }, type: 1 },

//{buttonId: `done`, buttonText: { displayText: 'KLIK KALO SUDAH DONE' }, type: 1 },
//]
kurrxd.sendMessage(from,
{text: tek})
//buttons: btn_menu})
kurrxd.sendMessage(`${'6285807405071@s.whatsapp.net'}`, {text: `*👋HALLO OWNER KU, ADA YANG ORDER NIH*\n\n*DARI* : ${sender.split('@')[0]}`})
}
       
        break
case 'donasi': case 'donate': case 'donasi': case 'donasi': {
                kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/de06b6e32db617a273376.jpg' }, caption: `*Hi Bro ${m.pushName}*\n*_Jika ingin Donasi Silahkan Scan Gambar Diatas_*

*_Atau Via_*
- Dana : 085807405071
- OVO : -
- Saweria : https://saweria.co/Yogzz

*_Terima Kasih Bagi Yang Sudah Donasi_*\n` }, { quoted: m })
}
        break 
    case 'ahay2':
        reply(`ok`)
        break
    case 'apauy':
        reply(`ok`)
        break
case 'block':{
if (!isCreator && !fromMe) return reply(mess.OnlyOwner)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Block\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await kurrxd.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block") // Block user
reply('Sukses Block Nomor')
}
        break
case 'unblock':{
if (!isCreator && !fromMe) return reply(mess.OnlyOwner)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Unblock\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await kurrxd.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock")
reply('Sukses Unblock Nomor')
}
        break
case 'pay': case 'payment':{
let depo = `Hai *@${sender.split('@')[0]}*\nBerikut List Payment Dari YogzzDevX
*- ${prefix}dana*
*- ${prefix}gopay*
*- ${prefix}ovo*
*- ${prefix}qris*`
kurrxd.sendMessage(from, {image: fs.readFileSync('./media/qris.jpg'), caption: depo, mentions : [sender]}, { quoted: m })
}
break
case 'listsewa':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
let tampilan_nya = `List Sewa Bot By YogzzDevX
Keuntungan?
- Bebas Spam
- Bawa Bot Ke Gc mu [ Maxsimal 1 Grup ]<
- anti jeda 5 menit
- Bot On 24 Jam & No Delay

Untuk Fitur Fitur Nya Silahkan Tanya https://wa.me/6285807405071

BERIKUT ADALAH LIST HARGA SEWA BOT DI YOGZZDEVX

_⎇ 1 Minggu: Rp5.000_
_⎇ 1 Bulan: Rp15.000_
_⎇ 2 Bulan: Rp20.000_
_⎇ 3 Bulan: Rp25.000_
_⎇ 4 Bulan: Rp30.000_
`
kurrxd.sendMessage(from,
{text: tampilan_nya,
mentions:[global.author, sender]})
}
  break
case 'instalsrv':
case 'listinstalsrv':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
let tampilan_nya = `Keuntungan Jadi Admin Pannel?

- Bisa Create Pannel & Di Jual
- Bisa Jadi Kang Jasa Runn Bot on 24 Jam
- Bisa Jadi Kang Jasa Buat Bot 
- Di Jamin Balik Modal


📌
*FREE EGG*
*FREE SC CREATE PANNEL*
*VPS DARI SAYA*
*DOMAIN DARI SAYA*
*INTINYA TINGGAL PAKE SAJA✅*

GARANSI 10 HARI❗


*BERIKUT ADALAH LIST & HARGA 
*_JASA INSTALL SERVER PANEL_*

20 GB = Rp20.000/BULAN
40 GB = Rp35.000/BULAN
80 GB = Rp45.000/BULAN`
kurrxd.sendMessage(from,
{text: tampilan_nya,
mentions:[global.author, sender]})
}
       break
case 'self': {
if (!isCreator) return reply(mess.OnlyOwner)
kurrxd.public = false
reply('Sukses Change To Self')
} 
       break
case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
kurrxd.public = true
reply('Sukse Change To Public')
} 
        break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return reply('khusus creator bot')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await kurrxd.downloadAndSaveMediaMessage(m)
await kurrxd.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
reply('done')
}
break
case 'panelmenu':
        reply(`proses`)
        kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg' }, caption:`
– *Panel Menu*

┌ ◦ ${prefix}addusr 
│ ◦ ${prefix}addusr2
│ ◦ ${prefix}addusr3
│ ◦ ${prefix}crateadmin
│ ◦ ${prefix}addsrv 
│ ◦ ${prefix}detusr
│ ◦ ${prefix}detsrv
│ ◦ ${prefix}delusr
│ ◦ ${prefix}delsrv
│ ◦ ${prefix}ramlist
│ ◦ ${prefix}infopanel
└ ◦ ${prefix}webpanel` }, { quoted: m })
break
case 'ownermenu': 
        reply(`proses`)
kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg' }, caption: `
– *Owner Menu*

┌ ◦ ${prefix}addgc *only grup*
│ ◦ ${prefix}delgc *only grup*
│ ◦ ${prefix}restseler *restart seler*
│ ◦ ${prefix}listseler
│ ◦ ${prefix}addsaldo
│ ◦ ${prefix}minsaldo
│ ◦ ${prefix}add *nomor/tag*
│ ◦ ${prefix}del *nomor/tag*
│ ◦ ${prefix}pushkontak *teks*
│ ◦ ${prefix}setppbot *image*
│ ◦ ${prefix}listonline 
│ ◦ ${prefix}listpc
│ ◦ ${prefix}creategroup
│ ◦ ${prefix}self *mode seleb*
└ ◦ ${prefix}public *mode prenli*` }, { quoted: m })
break
case 'groupmenu':
        reply(`proses`)
        kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg' }, caption:`
– *Group Menu*

┌ ◦ ${prefix}hidetag *teks*
│ ◦ ${prefix}kick *tag/reply*
│ ◦ ${prefix}antilink *on/off*
│ ◦ ${prefix}lgc 
│ ◦ ${prefix}resetlink
│ ◦ ${prefix}promote *tag/reply*
│ ◦ ${prefix}demote *tag/reply  
│ ◦ ${prefix}welcome *on/off*
│ ◦ ${prefix}tagall *teks*
│ ◦ ${prefix}setdesc *teks*
│ ◦ ${prefix}setnama *teks* 
│ ◦ ${prefix}id
│ ◦ ${prefix}group *open/close*
│ ◦ ${prefix}sendgc *number*
│ ◦ ${prefix}daftar 
│ ◦ ${prefix}listgroup
└ ◦ ${prefix}peraturan` }, { quoted: m })

break
case 'domainmenu':
case 'domain':
        reply(`proses`)
kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg' }, caption:`
– *Domain Menu*

┌ ◦ ${prefix}domain1  *[panellku.my.id]*
│ ◦ ${prefix}domain2  *[panellku.art]*
│ ◦ ${prefix}domain3  *[panellku.me]*
│ ◦ ${prefix}domain4  *[panellku.biz.id]*
│ ◦ ${prefix}domain5  *[panellku.tech]*
│ ◦ ${prefix}domain6  *[panelkuu.xyz]*
│ ◦ ${prefix}domain7  *[panellku.com]*
│ ◦ ${prefix}domain8  *[yasshost.com]*
│ ◦ ${prefix}domain9  *[yasshost.my.id]*
│ ◦ ${prefix}domain10  *[yasspedia.xyz]*
│ ◦ ${prefix}domain11  *[panelmurah.cfd]*
│ ◦ ${prefix}domain12  *[panelstore.xyz]*
│ ◦ ${prefix}domain13  *[panelstore.art]*
│ ◦ ${prefix}domain14  *[mypanel.biz.id]*
│ ◦ ${prefix}domain15  *[ofcbotku.com]*
│ ◦ ${prefix}domain16  *[panelonline.cfd]*
│ ◦ ${prefix}domain17  *[adwhost.my.id]*
│ ◦ ${prefix}domain18  *[adwpedia.xyz]*
│ ◦ ${prefix}domain19  *[yogzzweb.my.id]*
│ ◦ ${prefix}domain20  *[yogzzpedia.my.id]*
│ ◦ ${prefix}domain21  *[yogzzhost.my.id]*
│ ◦ ${prefix}domain22  *[jasa-panel.my.id]*
│ ◦ ${prefix}domain23  *[didinsec.biz.id]*
│ ◦ ${prefix}domain24  *[didindev.my.id]*
│ ◦ ${prefix}domain25  *[sellerpannel.my.id]*
│ ◦ ${prefix}domain26  *[biistoreee.xyz]*
│ ◦ ${prefix}domain27  *[putraoffc.site]*
│ ◦ ${prefix}domain28  *[putraoffc.com]*
│ ◦ ${prefix}domain29  *[kangpannel.xyz]*
│ ◦ ${prefix}domain30  *[biistoreee.art]*
│ ◦ ${prefix}domain31  *[biistoreee.biz.id]*
│ ◦ ${prefix}domain32  *[biistoreee.cfd]*
│ ◦ ${prefix}domain33  *[biistoreee.com]*
│ ◦ ${prefix}domain34  *[biistoreee.icu]*
│ ◦ ${prefix}domain35  *[biistoreee.my.id]*
│ ◦ ${prefix}domain36  *[biistoreee.net]*
│ ◦ ${prefix}domain37  *[biistoreee.tech]*
│ ◦ ${prefix}domain38  *[panellstore.art]*
│ ◦ ${prefix}domain39  *[panellstore.cfd]*
│ ◦ ${prefix}domain40  *[panellstore.com]*
│ ◦ ${prefix}domain41  *[panellstore.icu]*
└ ◦ ${prefix}domain42  *[mypterodactylpanel.my.id]*` }, { quoted: m })

break
case 'paymentmenu':
reply(` – *Payment Menu*

┌ ◦ ${prefix}dana
│ ◦ ${prefix}qr
│ ◦ ${prefix}gopay
└ ◦ ${prefix}ovo`)
        break
case 'mainmenu':
        reply(`proses`)
        kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg' }, caption: `
– *Main Menu*

┌ ◦ ${prefix}pin *teks*
│ ◦ ${prefix}sewa
│ ◦ ${prefix}confes *teks*
│ ◦ ${prefix}owner *whatsapp admin*
│ ◦ ${prefix}yt *youtube owner*
│ ◦ ${prefix}google *teks*
└ ◦ ${prefix}req *teks*` }, { quoted: m })
break
case 'resellermenu':
        reply(`process don't spam bot`)
        kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg' }, caption: `
– *Resller Menu*

┌ ◦ ${prefix}1gb
│ ◦ ${prefix}2gb
│ ◦ ${prefix}3gb
│ ◦ ${prefix}4gb
│ ◦ ${prefix}5gb 
│ ◦ ${prefix}6gb
│ ◦ ${prefix}7gb
│ ◦ ${prefix}8gb
│ ◦ ${prefix}10gb
└ ◦ ${prefix}unli` }, { quoted: m })
        break
case 'bugmenu':
        reply(`loading`)
        kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg' }, caption: `
– *Bug Menu*

┌ ◦ ${prefix}verify *62xx/@*
│ ◦ ${prefix}banned *62xx/@*
│ ◦ ${prefix}logout *62xx/@*
└ ◦ ${prefix}kenon  *62xx/@*` }, { quoted: m })
break
case 'domain1': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
               let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
               let tld = "panellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain3': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
               let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
               let tld = "panellku.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain4': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b268933cdea4ffd662bc56dd84e46e21";
               let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
               let tld = "panellku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain5': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4e1c19a2687fe1a2505fecaf3de3e7ff";
               let apitoken = "p4oS8J-Tc0Rt9z4tgS3gdzbaG-aL0FQ0Ro1mpl-Q";
               let tld = "panellku.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain6': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "72fc614619292a5d6c86d3e736b14062";
               let apitoken = "MF2cgyOmXeFdrwpcTS4XRbYbDL9zsmF6XY6TIFlv";
               let tld = "panelkuu.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain7': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c8a876bc10af3ce5ab11f2209121cf63";
               let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
               let tld = "panellku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain8': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f121b6997da209f413cccfbe14ab87a5";
               let apitoken = "eNtPGnxWd6lRIuD5kuKSV4FBwbKOoyFicl0fSXem";
               let tld = "yasshost.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain9': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b93ceaa610fe41aa917ef9fc4a3880ed";
               let apitoken = "3MsTJBSxrnVdaCtfWQmfHhIoIcmTczH6w9qM6fG0";
               let tld = "yasshost.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        break
case 'domain10': {
    if (!jangan) return reply("maaf grup ini blom di add oleh YogzzDevX")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fa44ede2dd0ccea9ed424e31934c7c2d";
               let apitoken = "DSs5e3UT-b0KoDxSbXrAELO8GdxeptcimauzMyNk";
               let tld = "yasspedia.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        break
case 'domain11': {
    if (!jangan) return reply("maaf grup ini blom di add oleh YogzzDevX")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f60790b30c7d698b79fb148e53b9a6cf";
               let apitoken = "Nh1vJxMp-uSbfOp29cFuYsZWy90zmG6EdZwI43wV";
               let tld = "panelmurah.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain12': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "030c4af3a1a8e92bc3588ac2299ed43a";
               let apitoken = "WpHir27QSPdzqb1FsLwFtcV-GIVkh4EEIpMbdtA4";
               let tld = "panelstore.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain13': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "db100346b2f204bd967b0de85f47cb29";
               let apitoken = "N0Cv1Yb4PuIAe23r0fCeWabVbpFyTJMJlCanHfCq";
               let tld = "panelstore.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        break
           case 'domain14': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4dab40fe5183e4c6bd7b9fd87582803c";
               let apitoken = "95QUM8iFtLPZA-CgZplgvg19LhY-_QwxYdFNdotp";
               let tld = "mypanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        break
           case 'domain15': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fe48fe742cfd06a727fcb0c439f3bebc";
               let apitoken = "IE_eGscecx821F6yywSlkpy1q4YrshlrbmJan-57";
               let tld = "ofcbotku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        break
case 'domain16': {
    if (!isGroup) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0c93e987a7f49232825815e037955659";
               let apitoken = "O4RKeEFZhN3cvNswEACkpz8ZfAPuUoTt2ADJ1q0z";
               let tld = "panelonline.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain17': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2b3472376b3451e5dcf7c86d6ec88d2a";
               let apitoken = "XSMXbE9wUQkcvjG5kfyiWBCaJNDzG6SyH-swaUE_";
               let tld = "adwhost.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain18': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "03d7d7bd8dfbff1286718b98b07bdc71";
               let apitoken = "GBVpypw0IaqgLHL0bcSbIoAErgnpcG-B2ONhmapC";
               let tld = "adwpedia.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 
        break
case 'domain42': {
    if (!jangan) return reply("maaf grup ini blom di add oleh YogzzDevX")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "713b406b4ddede7edbd80b1d0a678b7b";
               let apitoken = "u3Rc84Mzolj5qYu-x-hGC_w1RnwNf-oeQbjTXufm";
               let tld = "mypterodactylpanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        break
case 'domain19': {
    if (!jangan) return reply("maaf grup ini blom di add oleh YogzzDevX")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b67816c88cdd6efc4e03b9acd410f6ff";
               let apitoken = "DLqLrjs09k6OAR9c1q-cLiEIFFT2pQ17U2tD-_Nv";
               let tld = "yogzzweb.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        break
case 'domain20': {
    if (!jangan) return reply("maaf grup ini blom di add oleh YogzzDevX")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ee9261671bb70616e11e3e91ed53d2af";
               let apitoken = "izuy8ktV92IEulqUcA842xDk0gl8xfHnKhw8mEmv";
               let tld = "yogzzpedia.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        break
case 'domain21': {
    if (!jangan) return reply("maaf grup ini blom di add oleh YogzzDevX")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4afe9ba1f4fd8f969e40661ca9d10292";
               let apitoken = "XSrLdZintJc7xxBJgQmI1Kz3JT3iqKTXsb7tTOE9";
               let tld = "yogzzhost.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        break
case 'domain22': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ab732313828957ac4dfa9dd05ecdbea4";
               let apitoken = "wLoUr4uAAk_l2zOW03A_ePS0ishGEeLCjZrIXCdC";
               let tld = "jasa-panel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain23': {
           
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
               let apitoken = "A4E0OuHCDuUy09QCENX2t6suDS5EIIi3urJO101r";
               let tld = "didinsec.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain22 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain24': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "edf8e5a66859e6a1f8ccbde07c415082";
               let apitoken = "p0gm6UzsPw0Y0eudhfDr1ZBvV_WjX9eMpTp4ksXZ";
               let tld = "didindev.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain25': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d41a17e101c0f89f0aec609c31137f91";
               let apitoken = "fjYUs5uWqoZBU-4fCfqiqXHXhdRRrr2Lc2GZ0dOj";
               let tld = "sellerpannel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
           break
           case 'domain2': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fbb7300781a84b11d6db8767d59c";
               let apitoken = "jS5iwULl-Yr5H7miIYWhWVkF-4j5p1RzjwjyN";
               let tld = "panellku.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain26': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6e54db622bb8682bdf42316953b5401d";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain27': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "92fffa5f2cce4005a30e3950620cb97d";
               let apitoken = "DXKGBd9zzFMsQjCirVRqO8nwE06imW8KyGpOqnwC";
               let tld = "putraoffc.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        
        break
           case 'domain28': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e03420325af30aaed049cbcc4c3381ed";
               let apitoken = "SoEzG_hcx8trsYCG-YoxD3U3Tw6eKTbUxDZnokLn";
               let tld = "putraoffc.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain29': {
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba86d80050aa5a2343a8e456c85c32f0";
               let apitoken = "vvAcoh_BQOZ1u-jb7ORkH1YZDXOEoiA7dBovCcCs";
               let tld = "kangpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain30': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bc676ed94040800b77b4ede30822138c";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "biistoreee.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain31': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "57d742aa0cc2d83f18015d2c5d38dffa";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "biistoreee.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain32': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "90a464fad4c50ce3c049d0a95d738c31";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "biistoreee.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain33': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cd5058829fcb3ac96d3e5b094a5e1577";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "biistoreee.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain34': {

    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "33f5011c84308fd5ee0bf24e13364508";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "biistoreee.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain35': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "44fdddb637e651089cada7972e813354";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "biistoreee.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain36': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9e6ee9b849db7659516d03fd9dbf7bee";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "biistoreee.net";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain37': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ecfab91669cd9f1f269ff910ef37c4bc";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "biistoreee.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain38': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain39': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "66682b3bb4c566c45b8ade6c1f55638b";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain40': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80bb373d8fbd32d5e9eb5c173d7958cf";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain41': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b2dab95fa93b9957f47ef84e1bc9558f";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
        case "addusr3": {
if (!isCreator) return reply(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1-0gb"
let egg = global.eggsnya
let loc = global.location
let memo = "1-0"
let cpu = "1-0"
let disk = "1-0"
let email = username + "1398@blaze.hosting"
akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
Ini Adalah Data Akun Mu
JANGAN LUPA GANTI PASSWORD ACCOUNT

KALAU TIDAK BISA, KAMU BISA MINTA BANTUAN OWNER

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK TANYA OWNER
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 1-0? '1-0' : server.global.memory} MB
DISK: ${server.limits.disk === 1-0 ? 'global' : server.global.disk} MB
CPU: ${server.limits.cpu}%
`)
}
        break
case 'pin': {
if (!isCreator) return reply(mess.OnlyOwner)
 reply('Bentar')
 let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                kurrxd.sendMessage(from, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
        break
case 'lgc': case 'linkgc': {
if (!isCreator) return reply('Khusus creator bot')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
let response = await kurrxd.groupInviteCode(from)
kurrxd.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
        //depo
        case 'bukti':{
reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT ADA KENDALA/DEPOSIT BELOM DI KONFIRMASI BISA CHAT OWNER DI BAWAH.')
kurrxd.sendMessage('6285807405071@s.whatsapp.net', { text: `*ADA YANG DEPOSIT NIH*\n\n*@${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
        }
        break
    case 'verify': case 'banned': case 'kenon': case 'logout': {
 if (!isCreator) return reply(`Khusus Owner`)
 if (!q) return reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
reply(`succes ${command} ke nomer tersebut\n
note :
jika no masih centang 2 atau aktif no tersebut sudah terkena ${command} sebelumnya....`)
}
 
        break
 case "createadmin": {
if (!isCreator) return reply(mess.OnlyOwner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {

"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@yogzz.dev",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    await kurrxd.sendMessage(from, {text : tks})
    await kurrxd.sendMessage(nomornya, {
        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
`,
    })
} 
        break
case "setdesc": case "setdesk": {
if (!isGroup) return reply(`Harus Di Group Masbro`)
if (!isBotAdmins) return reply(`Lu Kira Gw Admin?`)
if (!isAdmins) return reply(`Fitur Ini Khusu Admin Njer`)
if (!text) return reply("Mau Diubah Jadi Apa?")
await kurrxd.groupUpdateDescription(from, text).then((res) => reply(`Sukses mengganti deskripsi group dengan ${text}`)).catch((err) => reply(jsonformat(err)))
}
     break
  case 'tagall': case 'infoall':
if (!isGroup) return reply(`Harus Di Group Masbro`)
  if (!isGroupAdmins) return msg.reply(mess.admin)
  let tekss = `*PENGUMUMAN 📢*\n\n*Pesan : ${q ? q : 'Nothing'}*\n\n`
  for (let mem of participants) {
  tekss += `🌱 @${mem.id.split('@')[0]}\n`
  }
  tekss += `\n*YogzzDevX*`
  kurrxd.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: m })  
      break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            reply(`DONE`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kurrxd.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await kurrxd.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
}
        break
case 'qris': {
kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/de06b6e32db617a273376.jpg' }, caption: `JAN LUPA SS BUKTI YAH | example : .bukti` }, { quoted: m })
} 
        break
case 'dana': {
kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/de06b6e32db617a273376.jpg' }, caption: `JAN LUPA SS BUKTI YAHA example : .bukti` }, { quoted: m })
}
        break
case 'gopay': {
kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/de06b6e32db617a273376.jpg' }, caption: `JAN LUPA SS BUKTI YAHA example : .bukti` }, { quoted: m })
}
        break
case 'ovo': {
kurrxd.sendMessage(from, { image: { url: 'https://telegra.ph/file/de06b6e32db617a273376.jpg' }, caption: `JAN LUPA SS BUKTI YAHA example : .bukti` }, { quoted: m })
}
        break
case "detsrv": {
let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return reply('*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let t = data.attributes
reply(`*${s.name.toUpperCase()} SERVER DETAILS*

STATUS: ${t.current_state}
ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
CREATED AT: ${s.created_at}`)

}
       
        break

case 'setnama': case 'setsubject': {
                if (!isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await kurrxd.groupUpdateSubject(m
.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
        break

case "detusr": {
if (!isCreator) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
        break
 case "addusr": {
if (!isCreator) return reply(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let tks = `
*SUCCESSFULLY ADD USER*

TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}

*Password telah dikirim di private chat @${u.split`@`[0]}*`

const sections = [
    {
        title: `SERVER *YOGZZDEVX* `,
                rows: [
                {title: `PAKET 1GB CPU 40%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,1000/1000,40`,description: "🔑CRATE PAKET 1GB CPU 40%"},
                {title: `PAKET 2GB CPU 70%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,2000/2000,70`,description: "🔑CRATE PAKET 2GB CPU 70%"},
                {title: `PAKET 3GB CPU 100%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,3000/3000,100`,description: "🔑CRATE PAKET 3GB CPU 100%"},    
                {title: `PAKET 4GB CPU 120%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,4000/4000,120`,description: "🔑CRATE PAKET 4GB CPU 120%"},   
                {title: `PAKET 5GB CPU 140%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,5000/5000,140`,description: "🔑CRATE PAKET 5GB CPU 140%"},    
                {title: `PAKET 6GB CPU 170%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,6000/6000,170`,description: "🔑CRATE PAKET 6GB CPU 170%"},   
                {title: `PAKET 7GB CPU 200%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,7000/7000,200`,description: "🔑CRATE PAKET 7GB CPU 200%"},   
                {title: `PAKET 8GB CPU 225%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,8000/8000,225`,description: "🔑CRATE PAKET 8GB CPU 225%"},    
                {title: `PAKET 10GB CPU 250%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,10000/10000,250`,description: "🔑CRATE PAKET 8GB CPU 250%"},   
                   
]}]

    const listMessage = {
        text: tks,
        footer: "YogzzSevX",
        title: "*SUCCESSFULLY ADD USER*",
        buttonText: "Click Here!",
        sections
    }
	
    await kurrxd.sendMessage(from, listMessage)
    await kurrxd.sendMessage(u, {
        text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n

⎙─➤ *📛USERNAME* : ${username}
⎙─➤ *🔑PASSWORD* : ${password}
⎙─➤ *💻LOGIN* : ${domain}

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------
`,

    })
} 
        break
case "setppbot": {
if (!isCreator) return reply(mess.OnlyOwner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await kurrxd.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await kurrxd.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await kurrxd.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
        break
case "delusr": {
  if (!isCreator) return reply(`KHUSUS OWNER`)
if (!isCreator) return reply(mess.OnlyOwner)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "addsrv": {
if (!isCreator) return reply(mess.OnlyOwner)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
case "delsrv": {
      if (!isCreator) return reply(`KHUSUS OWN `)

if (!isCreator) return reply(mess.OnlyOwner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
case 'pushkontak': {
 if (!isCreator) return reply(mess.OnlyOwner)
      if (!isGroup) return reply(`Digrup Bang`)
    if (!q) return reply(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    reply(`Succes Get Member`)
    for (let pler of mem) {
    kurrxd.sendMessage(pler, { text: q})
     }
     reply(`Succes Push Kontak`)
}
break
case 'hidetag': case 'ht': {
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply(`Lu siapa kocak`)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Teks?`)
kurrxd.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'resetlinkgc': case 'resetgc': 
if (!isCreator) return reply('Lu Bukan YogzzDevX Asu')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
await kurrxd.groupRevokeInvite(from)
.then( res => {
reply(`Link Gc Beres Gua Reset`)
})
break
case "kick": {
if (!isCreator) return reply('Boleh Aku Tanya ? Kamu Owner ?')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kurrxd.groupParticipantsUpdate(from, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'sendlinkgc': case 'sendgc': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isBotAdmins) return reply(mess.BotAdmin)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285807405071`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await kurrxd.groupInviteCode(from)
kurrxd.sendText(bnnd, `Order  Akses Bot? Join Gc\nhttps://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
sticSukses(from)
}
  break
case 'id':{
            reply(from)
}
       
break
case "panel":
txh = ` *YogzzDevX*
${kini}BY YogzzDevX

CARA ADD USER PANEL :
ram user,nomer

contoh : 1gb yogzz,6285807405071${kini}
`
//let buttons1 = [
   // {buttonId: 'ramlist', buttonText: {displayText: 'RAM YANG TERSEDIA'}, type: 2},
 //   {buttonId: 'menu', buttonText: {displayText: 'BACK TO MENU'}, type: 2}
 // ]
  
 // let buttonMessage1 = {
     // text: txh,
      //footer: '©YogzzDevX',
     // buttons: buttons1,
     // headerType: 1
 // }
kurrxd.sendMessage(from, {text: txh}, {quoted:m})
break
case "ramlist":

lrm = `${kini}RAM YANG TERSEDIA :
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅
7GB ✅
8GB ✅
10GB ✅
UNLI (KHUSUS OWNER SERVER)${kini}`
kurrxd.sendMessage(from, {text : lrm}, {quoted : m})
break
        case "daftar":
lrm = `${kini}SILAHKAN CONTACT ADMIN :
https://wa.me/6285807405071${kini}`
kurrxd.sendMessage(from, {text : lrm}, {quoted : m})
break
case "rulesseler":

lerm = `RULES RESSELER YOGZZDEVX
BAGI HASIL WAJIB 50 : 50 DENGAN OWNER
`
kurrxd.sendMessage(from, {text : lerm}, {quoted : m})
break

case "webpanel":
if (!isCreator) return reply(mess.OnlyOwner)
reply(`${domain}`)
break
case "listusr": {
if (!isCreator) return reply(`Mau liat user?`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let users = res.data
let sections = []
for (let user of users) {
let u = user.attributes
let obj = {
title: "-- PANEL --",
rows: [
{ title: `${u.id}. ${u.username}`, rowId: `${prefix}detusr ` + u.id, description: u.first_name + ' ' + u.last_name },
]
}
await sections.push(obj)
if (sections.length === 50) {
sections.push({
title: "-- PANEL --",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 5`, description: 'Page 5' },
]
})
}
}
await kurrxd.sendMessage(from, {
text: "Berikut list user ",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: " ",
buttonText: `${res.meta.pagination.count} Users`,
sections
},{ quoted : m })
}
break
case "listsrv": {
if (!isCreator) return reply(`Mau liat server?`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let obj = {
title: "-- PANEL --",
rows: [
{ title: `${s.id}. ${s.name}`, rowId: `${prefix}detsrv ` + s.id, description: `Status: ${data.attributes ? data.attributes.current_state : s.status}` },
]
}
await sections.push(obj)
if (sections.length >= 50 && res.meta.pagination.links.next) {
sections.push({
title: "-- PANEL --",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 5`, description: 'Page 5' },
]
})
}
}
await kurrxd.sendMessage(from, {
text: "Berikut list server *PANEL*",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "*PANEL*",
buttonText: `${res.meta.pagination.count} Servers`,
sections
}, { quoted: m })
}
break
case 'addseller':
 if (!isCreator) return reply(`Hadehh`)
        
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await kurrxd.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./config/seller.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
case 'delseller':
    if (!isCreator) return reply(`Siapa si lu?`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(bnnd)
owner.splice(unp, 1)
fs.writeFileSync('./config/seller.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Sudah Tidak Bisa Add Server`)
break

        case "1gb": {
if (!isSeler) return reply(`Emang lu udah join reseller di YogzzDevX? kalau belum gausah pake fitur ini blok`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "40"
let disk = "1024"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg" 
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`DONE BY YOGZZDEVX

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© YogzzDevX
`)

}

break
case "2gb": {
if (!isSeler) return reply(`Emang lu udah join reseller di YogzzDevX? kalau belum gausah pake fitur ini blok`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "70"
let disk = "2048"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg"
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
`)
}
break
case "3gb": {
if (!isSeler) return reply(`Emang lu udah join reseller di YogzzDevX? kalau belum gausah pake fitur ini blok`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "100"
let disk = "3072"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg"
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
        break
case 'addusr2':{
if (!isCreator) return reply(mess.OnlyOwner)
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "yg112"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": password 
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let tks = `

TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}

📛*PASSWORD BERHASIL DI KIRIM KE @${nomornya.split`@`[0]}*`
const sections = [
    {
        title: `SERVER *YOGZZDEVX* `,
                rows: [

                {title: `PAKET 1GB CPU 40%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,1000/1000,40`,description: "🔑CRATE PAKET 1GB CPU 40%"},
                {title: `PAKET 2GB CPU 70%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,2000/2000,70`,description: "🔑CRATE PAKET 2GB CPU 70%"},
                {title: `PAKET 3GB CPU 100%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,3000/3000,100`,description: "🔑CRATE PAKET 3GB CPU 100%"},    
                {title: `PAKET 4GB CPU 120%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,4000/4000,120`,description: "🔑CRATE PAKET 4GB CPU 120%"},   
                {title: `PAKET 5GB CPU 140%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,5000/5000,140`,description: "🔑CRATE PAKET 5GB CPU 140%"},    
                {title: `PAKET 6GB CPU 170%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,6000/6000,170`,description: "🔑CRATE PAKET 6GB CPU 170%"},   
                {title: `PAKET 7GB CPU 200%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,7000/7000,200`,description: "🔑CRATE PAKET 7GB CPU 200%"},   
                {title: `PAKET 8GB CPU 225%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,8000/8000,225`,description: "🔑CRATE PAKET 8GB CPU 225%"},    
                {title: `PAKET 10GB CPU 250%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,10000/10000,250`,description: "🔑CRATE PAKET 8GB CPU 250%"},   
                                             
]}]

    const listMessage = {
        text: tks,
        footer: "YogzzDevX",
        title: "*SUCCESSFULLY ADD USER*",
        buttonText: "Click Here!",
        sections
    }
	
    await kurrxd.sendMessage(from, listMessage)
    await kurrxd.sendMessage(nomornya, {
        text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password.toString()}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`,

    })
 }


break
case "4gb": {
if (!isSeler) return reply(`Emang lu udah join reseller di YogzzDevX? kalau belum gausah pake fitur ini blok`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4GB"
let egg = global.eggsnya
let loc = global.location
let memo = "4114"
let cpu = "120"
let disk = "4114"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg"
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

║⎙─➤ *👤USERNAME* : ${user.username}
║⎙─➤ *🔐PASSWORD* : ${password}
║⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isSeler) return reply(`Emang lu udah join reseller di YogzzDevX? kalau belum gausah pake fitur ini blok`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "140"
let disk = "5138"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg"
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "10gb": {
if (!isSeler) return reply(`Emang lu udah join reseller di YogzzDevX? kalau belum gausah pake fitur ini blok`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unlimited"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "250"
let disk = "10240"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg"
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

case "6gb": {
if (!isSeler) return reply(`Emang lu udah join reseller di YogzzDevX? kalau belum gausah pake fitur ini blok`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unlimited"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "170"
let disk = "6144"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg"
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isSeler) return reply(`Emang lu udah join reseller di YogzzDevX? kalau belum gausah pake fitur ini blok`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unlimited"
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "200"
let disk = "7168"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg"
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isSeler) return reply(`Emang lu udah join reseller di YogzzDevX? kalau belum gausah pake fitur ini blok`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unlimited"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "225"
let disk = "8192"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg"
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
if (!isCreator) return reply(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unlimited"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@yogzz.devx"
akunlo = "https://telegra.ph/file/3e08ed0902b6a593f4b00.jpg"
if (!u) return
let d = (await kurrxd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
kurrxd.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kurrxd.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "setppbot": {
if (!isCreator) return 
reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await kurrxd.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await kurrxd.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await kurrxd.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
break
 

default:}
if (budy.startsWith('>')) {
if (!isCreator) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (err) {
    console.log(err)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
//GAUSAH DIHAPUS
//RECODE BY YOGZZDEVX
//NO ENC?? BUY 085807405071