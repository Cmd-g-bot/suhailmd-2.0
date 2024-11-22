const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "243970113745";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "243970113745";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "yes"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_17_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICA1NixcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAzMCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MCxcbiAgICAgICAgODksXG4gICAgICAgIDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieCt2YnZETUlYbm5vcGVBN00xWldVU1kwc3prOVhYem5haUtCNkNkY2tHTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNnZYVTlYajFUUVdBUDFOV0lpVWhUd1wiLFxuICBcInBob25lSWRcIjogXCIwOTMyZjYxNS0wYzZiLTQ0NDAtODY1Yy0zOTU3OTA4MTRiODVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMjA3LFxuICAgICAgMTQ0LFxuICAgICAgMjUwLFxuICAgICAgMTkxLFxuICAgICAgNjIsXG4gICAgICA1NyxcbiAgICAgIDU4LFxuICAgICAgMCxcbiAgICAgIDE0NCxcbiAgICAgIDIxNyxcbiAgICAgIDIwLFxuICAgICAgMTY0LFxuICAgICAgMTI2LFxuICAgICAgMjAxLFxuICAgICAgMjAyLFxuICAgICAgMjIzLFxuICAgICAgNDAsXG4gICAgICAxNDYsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMjgsXG4gICAgICAxLFxuICAgICAgMjUsXG4gICAgICAxLFxuICAgICAgMTM5LFxuICAgICAgMjM5LFxuICAgICAgMSxcbiAgICAgIDIyNixcbiAgICAgIDEzNyxcbiAgICAgIDM0LFxuICAgICAgMjQ5LFxuICAgICAgMjI0LFxuICAgICAgMTc3LFxuICAgICAgMTcxLFxuICAgICAgMTI3LFxuICAgICAgNzMsXG4gICAgICAxMSxcbiAgICAgIDcyLFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeVA3STRHRUl6Wis3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVlazFaaEJkMmYwZ2hkbERpSWpkRS9kdFJTNFM0bzBZK3JSdEk2Mm0wWDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT3QvSWFvZEpScVpnWmRsTzc2dkJGNVp4RlYxM2QrdVB0RzVUT2NHUlFzaXlqN3N0eWhzcDBTWXpoZGo2dWpYZDdybVphcVBXQWNGUUZpbThxUzlyaGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ1FsejhNeHVIK1dXUFJRZ0xLa1EwRnZyVFlyM2JDTjVSOFRXUk1LMTBkdnlYUklqMEZOaTFjSTVjbkJlV1Fnang1d29qTkVXWjU0ZDI1ZXZDZ1ZzaEE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDM5NzAxMTM3NDU6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJgYGDwlqS5xZJpbCBkZSBmYXVjb27vo7/ljY1gYGBcIixcbiAgICBcImxpZFwiOiBcIjE0MjQyMTI4MzM0ODY2OToyOUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0Mzk3MDExMzc0NToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIxNzcwNDBcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "oeil de faucon",
  packname: process.env.PACK_NAME || "oeil de faucon",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Oeil de faucon",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "false",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
