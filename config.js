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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_02_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyOSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODgsXG4gICAgICAgIDMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg0LFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNjQwZVJ3SXNyUXNTMzIySDd3dGJ6MVJ1c2toMDNaMm1EZ3FWQWI1ajhyST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjlRV3Y4RVBUTWliemxRWUN2NWlxUVwiLFxuICBcInBob25lSWRcIjogXCI4ZWFmMTk1ZC1lYTZiLTRkMGItODk3Ny1hYzMzMDBjMjIyNDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAzOSxcbiAgICAgIDc4LFxuICAgICAgMjIsXG4gICAgICAxMzUsXG4gICAgICAxODcsXG4gICAgICAxMSxcbiAgICAgIDY2LFxuICAgICAgNTQsXG4gICAgICA0MCxcbiAgICAgIDI0NixcbiAgICAgIDU3LFxuICAgICAgOTksXG4gICAgICA4MCxcbiAgICAgIDY2LFxuICAgICAgNDksXG4gICAgICAzOCxcbiAgICAgIDEyNyxcbiAgICAgIDMwLFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDIwNCxcbiAgICAgIDczLFxuICAgICAgNDIsXG4gICAgICAyNDUsXG4gICAgICA0NixcbiAgICAgIDIwOSxcbiAgICAgIDEyMixcbiAgICAgIDE1MixcbiAgICAgIDE4MixcbiAgICAgIDE4MixcbiAgICAgIDE3OSxcbiAgICAgIDE1OSxcbiAgICAgIDIwMixcbiAgICAgIDQ1LFxuICAgICAgMTY0LFxuICAgICAgNjMsXG4gICAgICAxMDEsXG4gICAgICAyNSxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWUFlKOUZTNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTEyMDc5MzQzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZgfCdmZbwnZmi8J2ZpPCdmarwnZmo8J2Zgicg8J2Sh/CdkplcIixcbiAgICBcImxpZFwiOiBcIjIyMzM2ODg2NzUzMjk2NDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLKys5QkVRa3FYenVRWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1RMmp5UVdCQVhtREpqSzhLcWlFcE1jTWdaaW12QkVSOHRVcklZVlE5Ujg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieWNzWHp5VThFTlEzRTRiTG9RbGtLcGdUandSOWNzZ2xVcmh4SDNKWG9CWmVnamJNeStIU2dZZldBU0RJSDh1cFNXTjBQL2ZMV3c1NDZtcTZGTVVxQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibnY5ZSt2b1FRbHh5dDYvU2hCN3JYS0gvRWlIR25YbDhOS0Nkd0srRkY0WENzK3RwcUJEbDJ0MEpsY29id25FOFBzZDhHc2RXYlJ4eGZLb2tHSGtuaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTEyMDc5MzQzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIwMzkzMTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPRUxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9FTC5qc29uIjogIntcImtleURhdGFcIjpcInp2cUhnK3ZPWDVjdzZRc0g1RjkxZk1nZm1nSjBuczZmSE1QaUVvRXBuekk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzc1NjAxMTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjAyNjk4MjUyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
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
