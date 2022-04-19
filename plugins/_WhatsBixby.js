/* Copyright (C) Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Remoded by - Amalser
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require("fs")
const image = require('../buffer');
const Language = require('../language');
const Lang = Language.getString('_WhatsBixby');
var skcmd, sk1,sk2,sk3,sk4
var split = Config.ALLEMOJI.split('/');
         sk4 = split[4];
         sk3 = split[3];
         sk2 = split[2];
         sk1 = split[1];
         skcmd = split[0];        

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'list ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid, Config.BOT + '\n\n  \n' + CMD_HELP, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./html/photo/amalser.png')}}}});
        } 
        else {
            var CMD_HELP = '';
            
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, Config.BOT + '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}
            );
        }
    }));

    
    Asena.addCommand({pattern: 'menu ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid, Config.BOT + '\n\n  \n' + CMD_HELP, MessageType.text, { contextInfo: { forwardingScore: 5, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./html/photo/amalser.png')}}}});
        } 
        else {
            var CMD_HELP = '';
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, Config.BOT + '\n\n  \n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}
            );
        }
    }));
}


else if (Config.WORKTYPE == 'admin') {
    
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

     Asena.addCommand({pattern: 'list ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
         var us = await checkUsAdmin(message);
         if (!us) return await message.client.sendMessage(message.jid,Lang.PLKADMIN ,MessageType.text ,{quoted: message.data });


        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid, Config.BOT + '\n\n  \n' + CMD_HELP, MessageType.text, { contextInfo: { forwardingScore: 5, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./html/photo/amalser.png')}}}});
        } 
        else {
            var CMD_HELP = '';
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💌 ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '🌀 ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '💘 ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, '\n\n' + Config.BOTPLK + '\n\n ```AT YOUR SERVICE``` \n\n   \n' + CMD_HELP, MessageType.text,{quoted: message.data}
            );
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'menu ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
        var img = image.skbuffer(Config.LOGOSK)
        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zÄŸÃ¼ÅŸÄ±iÃ¶Ã§1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-zÃ¼ÅŸiÄŸ Ã¶Ã§1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '' +  sk2  + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_\n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '_ \n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '   + command.desc + '_ \n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n' + '' +  sk4 + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid, '\n\n*'+ Config.SKDL +'*\n\n```▣ BOT NAME:``` *'+Config.BOT+'*\n\n```▣ Developer:``` *Ameen,Rafi*\n\n```▣ Owner:``` *'+Config.OWNER+'*\n\n```▣ STICKER ON/OFFF:``` *'+Config.STICKERP+'*\n\n```▣ BGM ON/OFF:``` *'+Config.BGMFILTER+'*\n\n```▣ BGM :``` *'+Config.GEAR+'*\n\n```▣ TALKING HELENA :``` *'+Config.CHATBOT+'*\n\n```▣ ANTILINK :``` *'+Config.ANTİLİNK+'*\n\n```▣ WORK TYPE:``` *'+Config.WORKTYPE+'*\n\n∎ ⇓ *Commands ⇓ Read it carefully and give commands hope you enjoy* 🥰 ∎\n\n' + CMD_HELP, MessageType.text, {contextInfo: { forwardingScore: 100, isForwarded: true }, quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 123,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});
        } 
        else {
            var CMD_HELP = '';
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zÄŸÃ¼ÅŸÄ±iÃ¶Ã§1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-zÃ¼ÅŸiÄŸ Ã¶Ã§1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-zÃ¼ÅŸiÄŸ Ã¶Ã§1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                       if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '' +  sk2  + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_\n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '_ \n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}
            );
        }
    }));


    Asena.addCommand({pattern: `${skcmd} ?(.*)`, fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var img = image.skbuffer(Config.LOGOSK)
        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '' +  sk2  + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_\n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '_ \n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '   + command.desc + '_ \n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n' + '' +  sk4 + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid,'ㅤㅤ' + Config.BOT + `\n\n  ` + Config.SKDL + ` \n\n  \n` + CMD_HELP, MessageType.text, {contextInfo: { forwardingScore: 100, isForwarded: true }, quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 123,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});
            
        } else {
            var CMD_HELP = '';
            
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '' +  sk2  + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_\n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  sk3  + ' '  + Lang.EXAMPLE + ': ' + command.usage + '_ \n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '' +  sk1  + ' '  + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '' +  sk2  + ' '  + command.desc + '_ \n' +  sk3 + ' '  + Lang.EXAMPLE + ': ' + command.usage + '\n' + '' +  sk4 + ' '  + Lang.WARN + ': ' + command.warn + '\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, 'ㅤㅤ' + Config.BOT + `\n\n  ` + Config.SKDL + ` \n\n  \n` + CMD_HELP, MessageType.text, {contextInfo: { forwardingScore: 100, isForwarded: true }, quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 123,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});
          }
    }));
}