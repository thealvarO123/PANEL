const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.usePairingCode = false // false untuk QR
global.owner = ['6288989013781'] // no own
global.ownerName = 'IchanDeV'
global.namabot = 'ZXcoderID'
global.namaowner = 'IchanZX'
global.nomorOwner = ['6288989013781']
global.kontakOwner = "6288989013781"
global.packname = 'Sticker By'
global.author = 'ZXcoderID Assistant'
global.sessionName = 'session' // nama session
global.delayy = 3000
global.prefa = ['', '!', '.', '#', '$', ',']
global.domain = '' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumbnail = fs.readFileSync('./thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})