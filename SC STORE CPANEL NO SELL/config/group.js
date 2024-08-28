const fs = require('fs')

exports.groupResponse_Remove = async (kurrxd, update) => {
try {
ppuser = await kurrxd.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await kurrxd.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await kurrxd.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Bye👋'}, type: 1 }]
await kurrxd.sendMessage(
update.id, 
{
text: `_Sayonara👋 @${num.split("@")[0]}_`,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (kurrxd, update) => {
try {
ppuser = await kurrxd.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await kurrxd.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await kurrxd.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome👋'}, type: 1 }]
await kurrxd.sendMessage(
update.id, 
{ 
text: `_Thanks @${num.split("@")[0]} for joining into_ *${metadata.subject}.*
_The number of members now is_ *_${metadata.participants.length ? metadata.participants.length : "Undefined"} Members._*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (kurrxd, update) => {  
const metadata = await kurrxd.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await kurrxd.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await kurrxd.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (kurrxd, update) => {  
const metadata = await kurrxd.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await kurrxd.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await kurrxd.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan menjadi member biasa*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}