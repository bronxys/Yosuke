const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭═════════════ ⪨
┃ ࿊⃟📽𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐕𝐈𝐃𝐄𝐎📽⃟࿊
┃│✾ > ${prefix}Videolento (marca)
┃│✾ > ${prefix}Videorapido (marca)
┃│✾ > ${prefix}Videocontrario (marca)
╰═════════════ ⪨ 

╭═════════════ ⪨
┃ ࿊⃟⏺𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐀𝐔𝐃𝐈𝐎⏺⃟࿊
┃│✾ > ${prefix}Audiolento (marca)
┃│✾ > ${prefix}Audiorapido (marca)
┃│✾ > ${prefix}Grave (marca)
┃│✾ > ${prefix}Grave2 (marca)
┃│✾ > ${prefix}Esquilo (marca)
┃│✾ > ${prefix}Estourar (marca)
┃│✾ > ${prefix}Bass (marca)
┃│✾ > ${prefix}Bass2 (marca)
┃│✾ > ${prefix}Vozmenino (marca)
╰═════════════ ⪨
`
}

exports.alteradores = alteradores
