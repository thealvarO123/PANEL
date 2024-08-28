require('./settings')
const {
  default: makeWaSocket,
	connConnect,
  DisconnectReason,
  generateForwardMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  PHONENUMBER_MCC,
  jidDecode,
  proto
} = require('@adiwajshing/baileys')
const pino = require('pino')
const logg = require('pino')
const readline = require('readline');
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const figlet = require('figlet')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { color, bgcolor, mycolor } = require('../js/lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../js/lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('../js/lib/functions')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { groupResponse_Welcome, groupResponse_Remove, groupResponse_Promote, groupResponse_Demote } = require('./group.js')
const getMessage = async (key) => {
if(store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo'
}
}

async function startkurrxd() {
    const { useMultiFileAuthState, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } = require('@adiwajshing/baileys')
    const { state, saveCreds } = await useMultiFileAuthState(`./session`)
    const auth = {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
    }
console.log(auth.creds)
    const { version, isLatest } = await fetchLatestBaileysVersion()
const kurrxd = makeWaSocket({
  version,
  logger: pino({ level: "fatal" }).child({ level: "fatal" }),
  printQRInTerminal: !global.usePairingCode,
  auth,
  getMessage,
 // keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
//  },
  browser: ['Windows', 'Firefox', '129.0.2'],
  markOnlineOnConnect: true,
  generateHighQualityLinkPreview: true,
  defaultQueryTimeoutMs: undefined
  })
	const useMobile = process.argv.includes('--mobile')
// Read line interface
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
if (usePairingCode && !kurrxd.authState.creds.registered) {
		let phoneNumber = await question('┏━━  *「 REGISTER 」*\n┃ ❖ Masukan nomor WhatsApp anda\nAwali dengan 628xxxxxx\n┗━━━━━━━━━━━━━━━━━━┅\n\n')
		phoneNumber = phoneNumber.replace(/\D/g, '')
		let code = await kurrxd.requestPairingCode(phoneNumber)
		console.log(`┏━━  *「 YOUR PAIRING CODE」*\n┃ ❖ ${code}\n┗━━━━━━━━━━━━━━━━━━┅`)
	}

//store.bind(kurrxd.ev)


kurrxd.ev.on('messages.upsert', async mek => {
try {
if (!mek.messages) return
msg = mek.messages[0]
require('../js/kurrxd')(kurrxd, msg, mek, store)
} catch (err) {
            console.log(err)
        }
    })
    
    // anticall auto block
        kurrxd.ws.on('CB:call', async (json) => {
        const callerId = json.content[0].attrs['call-creator']
        if (json.content[0].tag == 'offer') {
        let pa7rick = await kurrxd.sendContact(callerId, global.owner)
        kurrxd.sendMessage(callerId, { text: `? *Sistem otomatis block!*\n? *Jangan menelpon bot*!\n*? Silahkan Hubungi Owner Untuk Dibuka !*`}, { quoted : pa7rick })
        await sleep(8000)
        await kurrxd.updateBlockStatus(callerId, "block")
        }
        })
    
    kurrxd.ev.on('group-participants.update', async (anu) => {
            console.log(anu)
            try {
                let metadata = await kurrxd.groupMetadata(anu.id)
                let participants = anu.participants
                for (let num of participants) {
                    // Get Profile Picture User
                    try {
                        ppuser = await kurrxd.profilePictureUrl(num, 'image')
                    } catch {
                        ppuser = 'https://tinyurl.com/yx93l6da'
                    }
    
                    // Get Profile Picture Group
                    try {
                        ppgroup = await kurrxd.profilePictureUrl(anu.id, 'image')
                    } catch {
                        ppgroup = 'https://tinyurl.com/yx93l6da'
                    }
                   if (anu.action == 'add') {
                     let a = `*Hello @${num.split("@")[0]}, ?? Welcome To ${metadata.subject}*\n*Kami Harap Kamu Merasa Nyaman Di Grup Ini Dan Jangan Lupa Membaca Deskripsi Grup ??*\n\n+---? *INTRO*\n? *Nama* :\n? *Gender* :\n? *Kelas* :\n? *Domisili* :\n? *Waifu/Husbu* :\n+--------------`
                     kurrxd.sendMessage(anu.id, { audio: fs.readFileSync('./mp3/welcome.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
                        kurrxd.sendMessage(anu.id, {
         text: a, 
          contextInfo: {
             externalAdReply: {
             title: `${namabot}`,
             body: `${namaowner}`,
             thumbnailUrl: ppuser,
             sourceUrl: "https://instagram.com/iamunderox_",
             mediaType: 1,
             renderLargerThumbnail: true
        }}})
                    } else if (anu.action == 'remove') {
                        let a = `*Kami harap orang yang mencintai @${num.split("@")[0]} akan merasa nyaman saat mengunjungi profilnya untuk mengenang dan merayakan momen hidupnya* ????.`
                        kurrxd.sendMessage(anu.id, { audio: fs.readFileSync('./mp3/leave.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
          kurrxd.sendMessage(anu.id, {
         text: a, 
          contextInfo: {
             externalAdReply: {
             title: `${namabot}`,
             body: `${namaowner}`,
             thumbnailUrl: ppuser,
             sourceUrl: "https://instagram.com/iamunderox_",
             mediaType: 1,
             renderLargerThumbnail: true
        }}})
                    } else if (anu.action == 'promote') {
                        let a = `Congratulations @${num.split("@")[0]}, on being promoted to admin of this group ${metadata.subject} ??`
                        kurrxd.sendMessage(anu.id, {
         text: a, 
          contextInfo: {
             externalAdReply: {
             title: `${namabot}`,
             body: `${namaowner}`,
             thumbnailUrl: ppuser,
             sourceUrl: "https://instagram/@dryan.pu",
             mediaType: 1,
             renderLargerThumbnail: true
        }}})
                    } else if (anu.action == 'demote') {
                        let a = `nice try for the demotion to become an ordinary member`
                        kurrxd.sendMessage(anu.id, {
         text: a, 
          contextInfo: {
             externalAdReply: {
             title: `${namabot}`,
             body: `${namaowner}`,
             thumbnailUrl: ppuser,
             sourceUrl: "https://instagram/@dryan.pu",
             mediaType: 1,
             renderLargerThumbnail: true
        }}})
                  }
                }
            } catch (err) {
                console.log("Eror Di Bagian Welcome Group "+err)
            }
        })
        
            kurrxd.ev.on('creds.update', saveCreds)
            
            kurrxd.public = true
    
    kurrxd.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') { lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startkurrxd() : ''
    } else if (connection === "open") { kurrxd.sendMessage(global.owner[0] + "@s.whatsapp.net", { text: `*Bot Started!*\n\n\n*_Minimal Subscribe Bang :3_*\n\n*YouTube:*\nhttps://youtube.com/@qyuunee` }); }
    console.log(update)}
    )
}

startkurrxd()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})