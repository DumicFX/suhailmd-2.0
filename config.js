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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349070539812";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_35_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI2LFxuICAgICAgICA2OCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhmeFpLamh0NWVndzRneWJOYW5uVzlucHZVb1ZoSUhjODY4SUtiNTN6cWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA3MDUzOTgxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUFGNjQzRUM1OEEwMDAzRjUwOTRCQjJBRTk1M0MzNThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0OTg5Njk5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjgtbFlLbUR4U2syZHNienE3c0tkZ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDM2NmEyYjctMzg0MS00ODMyLWIwNjItZWJhMDdlZmQzYmI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMTI2LFxuICAgICAgOTMsXG4gICAgICAyNTQsXG4gICAgICA2MyxcbiAgICAgIDE2OCxcbiAgICAgIDExMSxcbiAgICAgIDk2LFxuICAgICAgMTU3LFxuICAgICAgMTM0LFxuICAgICAgMjQ1LFxuICAgICAgNTQsXG4gICAgICAyNDIsXG4gICAgICAxMTksXG4gICAgICAxNCxcbiAgICAgIDE1NixcbiAgICAgIDgyLFxuICAgICAgNTcsXG4gICAgICAxMzQsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMjI1LFxuICAgICAgMSxcbiAgICAgIDIyNCxcbiAgICAgIDMxLFxuICAgICAgODUsXG4gICAgICAyMTEsXG4gICAgICAyMzEsXG4gICAgICA3NyxcbiAgICAgIDE5OCxcbiAgICAgIDE2OSxcbiAgICAgIDEyOSxcbiAgICAgIDEzMCxcbiAgICAgIDIxNixcbiAgICAgIDM3LFxuICAgICAgNCxcbiAgICAgIDE0NCxcbiAgICAgIDEyOSxcbiAgICAgIDEyMixcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHOVJWOFJFS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MDUzOTgxMjo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI2ODMwNDI2NjExNzY4OjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wvNzQ5c0JFUHV1cDdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3pza3F1VlZCOGpwSWIvZEFLdVE2QnNpMHlodldHbFdZY3pJa2kzbC9XMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxR3dCcmdROFl6VXBjcGQyNVpNUEJncWFvTmlKRUJnY1NsMU5IZ2dPbFRLcU1wUkxiSWM3ZURGYmF1Qi85dzRsQ3Zib3AwSElVNTE3cWZNNjUyeWdEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDSUVHUG4wQTZMQjhwMHRPczFOUlh0RmJ6b0RKdTluNXpJR3hrQ1hRZ2FxODFjazRZeE13bUpEaXR3c043c3N0aFYvSk9kQU1URCt4ajh2N2pFbHZEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcwNTM5ODEyOjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTg5Njk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXBoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcGguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvWDNlOUp6aGc5NXRsSW9GOUVZbytvaDJtS01IcWNha1BMMER4WjgzU0x3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2MDkxNDExMCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDk4MzAwNTQwMVwifSIKfQ=="  // PUT your SESSION_ID 


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
