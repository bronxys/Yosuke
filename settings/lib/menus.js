const menu = (prefix, sender, NomeBot) => {
  
// [MENU PRINCIPAL] NÃO APAGUE ESSE ${PREFIX} E NÃO COLOQUE NADA DENTRO POIS ESTÁ PUXANDO DA PASTA config.js SE QUIZER APAGAR APAGUE TODO
  
return `
╭════════════ ⪨
┃🩸𝐃𝐈𝐕𝐄𝐑𝐒𝐎𝐒-𝐌𝐄𝐍𝐔𝐒🩸
┃│✾ × ${prefix}Menudono
┃│✾ × ${prefix}Menuadm
┃│✾ × ${prefix}Menupremium
┃│✾ × ${prefix}Efeitosimg
┃│✾ × ${prefix}Logos
┃│✾ × ${prefix}alteradores
┃│✾ × ${prefix}Brincadeiras
╰═════════════ ⪨

╭════════════ ⪨
┃👤𝐂𝐌𝐃𝐒-𝐃𝐄-𝐌𝐄𝐌𝐁𝐑𝐎👤
┃│✾ × ${prefix}Idiomas (Gtts)
┃│✾ × ${prefix}Bug (Questione/Erros)
┃│✾ × ${prefix}Infodono (Info-dono)
┃│✾ × ${prefix}Sugestao (Dica/Sugestão)
┃│✾ × ${prefix}Avalie (O-quanto-bom)
┃│✾ × ${prefix}Alugar (Alugar/dono)
┃│✾ × ${prefix}Infocmd (cmd)
╰════════════ ⪨

╭════════════ ⪨
┃👾𝐉𝐎𝐆𝐎𝐒/𝐀𝐏𝐊𝐒👾
┃│✾ × ${prefix}Jogodavelha (@)
┃│✾ × ${prefix}Ppt (Pedra-papel-tesoura)
┃│✾ × ${prefix}Anagrama (1/0)
┃│✾ × ${prefix}quizanimais (1/0)
┃│✾ × ${prefix}Gartic (1/0)
┃│✾ × ${prefix}enigma (1/0)
┃│✾ × ${prefix}Apks (Mod-Apk)
┃│✾ × ${prefix}Banco (Saldo)
╰════════════ ⪨

╭════════════ ⪨
┃🪀𝐂𝐌𝐃𝐒-𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐕𝐎𝐒🪀
┃│✾ × ${prefix}Ping (Velocidade/Up) 
┃│✾ × ${prefix}Atividade (do Grupo)
┃│✾ × ${prefix}Rankativo
┃│✾ × ${prefix}Checkativo (@Marcar)
┃│✾ × ${prefix}Ranklevel (do Grupo) 
╰════════════ ⪨

╭════════════ ⪨
┃🔎𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒/𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒🔎
┃│✾ × ${prefix}Play (Nome)
┃│✾ × ${prefix}Playdoc (Nome)
┃│✾ × ${prefix}Playaudio (Nome)
┃│✾ × ${prefix}Playvideo (Nome)
┃│✾ × ${prefix}Twitteraudio (Link) 
┃│✾ × ${prefix}Twittervideo (Link)
┃│✾ × ${prefix}Faceaudio (Link)
┃│✾ × ${prefix}Facevideo (Link)
┃│✾ × ${prefix}Mediafire (Link)
┃│✾ × ${prefix}ytsearch (Nome)
┃│✾ × ${prefix}Gimage (Goku)
┃│✾ × ${prefix}Pinterest (Naruto)
┃│✾ × ${prefix}Imgpralink (Marcar-img)
┃│✾ × ${prefix}Videopralink (Marcar-vid)
╰═════════════ ⪨

╭════════════ ⪨
┃📩𝐂𝐌𝐃𝐒-𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐕𝐎𝐒📩
┃│✾ × ${prefix}clima (Salvador)
┃│✾ × ${prefix}wikipedia (JavaScript)
┃│✾ × ${prefix}Celular (A10s)
┃│✾ × ${prefix}Playstore (Free fire)
┃│✾ × ${prefix}amazonsearch (Produtos)
┃│✾ × ${prefix}chatgpt (Pergunta)
┃│✾ × ${prefix}Moeda (Cotação)
┃│✾ × ${prefix}letramusic (Música)
┃│✾ × ${prefix}espnoticias 
╰════════════ ⪨

╭════════════ ⪨
┃🌸𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒🌸
┃│✾ × ${prefix}Fsticker (Marcar-foto)
┃│✾ × ${prefix}Attp (texto)
┃│✾ × ${prefix}Attp2 (Texto)
┃│✾ × ${prefix}Sticker (Marcar-foto)
┃│✾ × ${prefix}Toimg (Marcar-sticker)
┃│✾ × ${prefix}Togif (Marcar-sticker)
┃│✾ × ${prefix}figfundo
┃│✾ × ${prefix}Roubar (Texto/Texto)
┃│✾ × ${prefix}Figurinhas (Quantidade)
╰════════════ ⪨

╭════════════ ⪨
┃🧩𝐂𝐌𝐃𝐒-𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒🧩
┃│✾ × ${prefix}Gtts (Idioma + Texto)
┃│✾ × ${prefix}Tagme 
┃│✾ × ${prefix}Falar PT (Texto)
┃│✾ × ${prefix}Metadinha
┃│✾ × ${prefix}Emoji (😏/Whatsapp)
┃│✾ × ${prefix}Emojimix (Emoji+Emoji)
┃│✾ × ${prefix}Tabela (Letras/Simbolos) 
┃│✾ × ${prefix}Conselhobiblico
┃│✾ × ${prefix}Fatos (Curiosidades)
┃│✾ × ${prefix}Simi (Fale com ela)  
┃│✾ × ${prefix}Perfil
┃│✾ × ${prefix}Calcular (10 + 10)
┃│✾ × ${prefix}Fazernick (Oq deseja)
┃│✾ × ${prefix}Ptvmsg (Mencione-V)
╰═════════════ ⪨ 
`;

};

exports.menu = menu;

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

// MENU DE ADMINISTRADORES 

const adms = (prefix, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

	return `​​​​
╭══════════════ ⪩
┃🛡𝐌𝐄𝐍𝐔-𝐀𝐃𝐌𝐈𝐍𝐒🛡
┃│✾ × ${prefix}Advertir (@)(Advertencia)
┃│✾ × ${prefix}mute (@)(Mutar)
┃│✾ × ${prefix}desmute (@)(Desmutar)
┃│✾ × ${prefix}Add 5585...
┃│✾ × ${prefix}Kick [@] (pra-remover) 
┃│✾ × ${prefix}Ban (responder-mensagem)
┃│✾ × ${prefix}Promover [@] (Ser-ADM)
┃│✾ × ${prefix}Rebaixar [@] (rebaixar-adm)
┃│✾ × ${prefix}admins (Marcar-adms)
┃│✾ × ${prefix}listanegra (NUMERO)
┃│✾ × ${prefix}tirardalista (NUMERO)
┃│✾ × ${prefix}Totag (menciona-algo)
┃│✾ × ${prefix}Grupo f/a
┃│✾ × ${prefix}Status (Ativacoes)
┃│✾ × ${prefix}Limpar (texto-invisível-gp)
┃│✾ × ${prefix}Del (Deletar-msg)
┃│✾ × ${prefix}Atividades (DO-GRUPO)
┃│✾ × ${prefix}Linkgp
┃│✾ × ${prefix}Grupoinfo
┃│✾ × ${prefix}Hidetag (txt) (marcação)
┃│✾ × ${prefix}Marcar (marca tds do gp)
┃│✾ × ${prefix}Anagrama 1 / 0
┃│✾ × ${prefix}Antipalavra 1 / 0
┃│✾ × ${prefix}Descgp (TXT)
┃│✾ × ${prefix}Nomegp (Nome)
┃│✾ × ${prefix}Criartabela (ESCREVA-ALGO)
┃│✾ × ${prefix}Tabelagp
╰══════════════ ⪨ 
`;
};

exports.adms = adms;

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

// MENU DE DONO

const menudono = (prefix, sender) => {
	
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	

return `​
╭══════════════ ⪩
┃🎗𝐌𝐄𝐍𝐔 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀𝐑𝐈𝐎🎗
┃│✾ × ${prefix}Bangp
┃│✾ × ${prefix}Unbangp
┃│✾ × ${prefix}Blockcmd  (cmd)
┃│✾ × ${prefix}Unblockcmd (cmd)
┃│✾ × ${prefix}listacmdprem (cmds prem)
┃│✾ × ${prefix}Atividades (grupo)
┃│✾ × ${prefix}Inativos (ghost-gp)
┃│✾ × ${prefix}Banghost (qnt-msg)
┃│✾ × ${prefix}Seradm (Seradm)
┃│✾ × ${prefix}Sermembro (tirar-adm)
┃│✾ × ${prefix}Serpremium
┃│✾ × ${prefix}Listagp
┃│✾ × ${prefix}Sairgp (Sair-bot)
┃│✾ × ${prefix}sairdogp (Id-gp)
┃│✾ × ${prefix}Entrar (Link)
┃│✾ × ${prefix}Add_prefixo (Prefix)
┃│✾ × ${prefix}Del_prefixo (prefix)
┃│✾ × ${prefix}Prefixos
┃│✾ × ${prefix}Antipalavrão 1 / 0
┃│✾ × ${prefix}Antiligar 1 / 0
┃│✾ × ${prefix}Addpalavra (palavrão)
┃│✾ × ${prefix}Delpalavra (palavrão)
┃│✾ × ${prefix}Ativo
┃│✾ × ${prefix}Ausente (fale-oq-faz)
┃│✾ × ${prefix}Delpremium @(marca)
┃│✾ × ${prefix}Addpremium @(marca)
┃│✾ × ${prefix}Clonar [@] (rouba ft de prf)
┃│✾ × ${prefix}Fotobot (img, = foto do BT)
┃│✾ × ${prefix}Descriçãogp (digite-algo)
┃│✾ × ${prefix}Block [@] (bloq de usar cmds) 
┃│✾ × ${prefix}Unblock [@] (desbloquear)
┃│✾ × ${prefix}Infocmd_add (cmd)
┃│✾ × ${prefix}Infocmd_del (cmd)
┃│✾ × ${prefix}Setprefix  (prefixo-novo)
┃│✾ × ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
┃│✾ × ${prefix}Addcmdprem (cmd)
┃│✾ × ${prefix}Delcmdprem (cmd)
┃│✾ × ${prefix}Nuke (Arquivar-gp)
╰══════════════ ⪨ 
`;

};

exports.menudono = menudono;

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
  return ` 
╭═════════════ ⪩
┃🎨 𝐋𝐎𝐆𝐎𝐒 𝟐 𝐓𝐄𝐗𝐓𝐎𝐒🎨 
┃│✾ × ${prefix}marvel (Texto)
┃│✾ × ${prefix}pornhub (Texto)
┃│✾ × ${prefix}space (Texto)
┃│✾ × ${prefix}stone (Texto)
┃│✾ × ${prefix}steel (Texto)
┃│✾ × ${prefix}grafity (Texto)
┃│✾ × ${prefix}glitch3 (Texto)
┃│✾ × ${prefix}america (Texto)
┃│✾ × ${prefix}fiction (Texto)
┃│✾ × ${prefix}3dstone (Texto)
┃│✾ × ${prefix}areia (Texto)
┃│✾ × ${prefix}style (Texto)
┃│✾ × ${prefix}blood (Texto)
┃│✾ × ${prefix}pink (Texto)
┃│✾ × ${prefix}cattxt (Texto)
┃│✾ × ${prefix}neondevil(Texto)
┃│✾ × ${prefix}carbon (Texto)
┃│✾ × ${prefix}metalfire  (Texto)
┃│✾ × ${prefix}thunder (Texto)
┃│✾ × ${prefix}vidro (Texto)
┃│✾ × ${prefix}jokerlogo (Texto)
┃│✾ × ${prefix}transformer (Texto)
┃│✾ × ${prefix}demonfire (Texto)
┃│✾ × ${prefix}jeans (Texto)
┃│✾ × ${prefix}metalblue (Texto)
┃│✾ × ${prefix}natal (Texto)
┃│✾ × ${prefix}ossos (Texto)
┃│✾ × ${prefix}asfalto (Texto)
┃│✾ × ${prefix}break (Texto)
┃│✾ × ${prefix}glitch2 (Texto)
┃│✾ × ${prefix}colaq (Texto)
┃│✾ × ${prefix}neon3 (Texto)
┃│✾ × ${prefix}nuvem (Texto)
┃│✾ × ${prefix}horror (Texto)
┃│✾ × ${prefix}matrix (Texto)
┃│✾ × ${prefix}berry (Texto)
┃│✾ × ${prefix}luxury (Texto)
┃│✾ × ${prefix}lava (Texto)
┃│✾ × ${prefix}thunderv2 (Texto)
┃│✾ × ${prefix}neongreen (Texto)
┃│✾ × ${prefix}neve (Texto)
┃│✾ × ${prefix}neon (Texto)
┃│✾ × ${prefix}neon1  (Texto)
┃│✾ × ${prefix}neon3d (Texto)
┃│✾ × ${prefix}gelo (Texto)
┃│✾ × ${prefix}neon3 (Texto)
┃│✾ × ${prefix}3dgold (Texto)
┃│✾ × ${prefix}lapis (Texto)
┃│✾ × ${prefix}toxic (Texto)
┃│✾ × ${prefix}demongreen (Texto)
┃│✾ × ${prefix}rainbow (Texto)
┃│✾ × ${prefix}halloween (Texto)
╰══════════════ ⪨ `;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭┤📸𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐕𝐈𝐃𝐄𝐎📸
┃│✾ > ${prefix}Videolento (marca)
┃│✾ > ${prefix}Videorapido (marca)
┃│✾ > ${prefix}Videocontrario (marca)
╰╦══════════════════ 
╭┤🔀𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐀𝐔𝐃𝐈𝐎🔀
┃│✾ > ${prefix}Audiolento (marca)
┃│✾ > ${prefix}Audiorapido (marca)
┃│✾ > ${prefix}Grave (marca)
┃│✾ > ${prefix}Grave2 (marca)
┃│✾ > ${prefix}Esquilo (marca)
┃│✾ > ${prefix}Estourar (marca)
┃│✾ > ${prefix}Bass (marca)
┃│✾ > ${prefix}Bass2 (marca)
┃│✾ > ${prefix}Vozmenino (marca)
╰═══════════════════ 
`;
};

exports.alteradores = alteradores;

// MENU PREMIUM 

const menuprem = (prefix, sender) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭┤👑𝐌𝐄𝐍𝐔-𝐏𝐑𝐄𝐌𝐈𝐔𝐌👑
┃│✾ > ${prefix}Destrava
┃│✾ > ${prefix}Destrava2
┃│✾ > ${prefix}GerarCPF
┃│✾ > ${prefix}PremiumList
┃│✾ > ${prefix}Celular (Nome)
╰╦══════════════════ 
`;
};

exports.menuprem = menuprem;

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭═══════════════════ ⪩
┃🎮𝐌𝐄𝐍𝐔-𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒🎮
┃│✾ > ${prefix}Gay (marca (@))
┃│✾ > ${prefix}Feio (marca (@))
┃│✾ > ${prefix}Corno (marca (@))
┃│✾ > ${prefix}Vesgo (marca (@))
┃│✾ > ${prefix}Bebado (marca (@))
┃│✾ > ${prefix}Gostoso (marca (@))
┃│✾ > ${prefix}Gostosa (marca (@))
┃│✾ > ${prefix}Beijo (marca (@))
┃│✾ > ${prefix}Matar (marca (@))
┃│✾ > ${prefix}Tapa (marca (@))
┃│✾ > ${prefix}Chute (marca (@))
┃│✾ > ${prefix}Dogolpe (marca (@))
┃│✾ > ${prefix}Nazista (marca (@))
┃│✾ > ${prefix}Chance (fale algo)
┃│✾ > ${prefix}Casal (Casal do grupo)
┃│✾ > ${prefix}Resetforca (Resetar)
┃│✾ > ${prefix}Jogodaforca (Inicia)
┃│✾ > ${prefix}Ppt (Pedra/Papel/Tesoura)
┃│✾ > ${prefix}Cassino
┃│✾ > ${prefix}Rankgay (5 gays)
┃│✾ > ${prefix}Rankgado (5 gados)
┃│✾ > ${prefix}Rankcorno (5 cornos)
┃│✾ > ${prefix}Rankgostoso (5 gostosos)
┃│✾ > ${prefix}Rankgostosa (5 gostosas)
┃│✾ > ${prefix}Ranknazista (5 nazistas)
┃│✾ > ${prefix}Rankotakus (5 otakus)
┃│✾ > ${prefix}Rankpau (5 pauzudos)
┃│✾ × ${prefix}rankanalfabetos (5 analfa)
┃│✾ × ${prefix}depressivos (5 depre)
┃│✾ × ${prefix}rankpobres (5 depre)
┃│✾ × ${prefix}rankpsicopata (5 psico)
┃│✾ > ${prefix}Mencionar (fale algo)
┃│✾ × ${prefix}Death
┃│✾ × ${prefix}dedomeio 
┃│✾ × ${prefix}Tiro (@)
┃│✾ × ${prefix}Voadora 
╰═══════════════════ 
`;
};

exports.brincadeiras = brincadeiras;

// MENU DE EFEITOS DE IMAGEM

const efeitos = (prefix, sender) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `
╭═══════════════════ ⪩
┃🌟𝐌𝐄𝐍𝐔-𝐃𝐄-𝐄𝐅𝐄𝐈𝐓𝐎𝐒🌟
┃│✾ × ${prefix}lixo (Marcar-foto)
┃│✾ × ${prefix}lgbt (Marcar-foto)
┃│✾ × ${prefix}morto (Marcar-foto)
┃│✾ × ${prefix}preso (Marcar-foto)
┃│✾ × ${prefix}deletem (Marcar-foto)
┃│✾ × ${prefix}procurado (Marcar-foto)
┃│✾ × ${prefix}hitler (Marcar-foto)
┃│✾ × ${prefix}borrar (Marcar-foto)
┃│✾ × ${prefix}merda (Marcar-foto)
╰═══════════════════
`;
};

exports.efeitos = efeitos;