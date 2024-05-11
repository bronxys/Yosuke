const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭════════════════ ⪨
┃  📽ALTERADOR-VIDEO📽
┃│✾ > ${prefix}Videolento (marca)
┃│✾ > ${prefix}Videorapido (marca)
┃│✾ > ${prefix}Videocontrario (marca)
╰══════════════┐
╭══════════════┴═ ⪨
┃  🔊ALTERADOR-AUDIO
┃│✾ > ${prefix}Audiolento (marca)
┃│✾ > ${prefix}Audiorapido (marca)
┃│✾ > ${prefix}Grave (marca)
┃│✾ > ${prefix}Grave2 (marca)
┃│✾ > ${prefix}Esquilo (marca)
┃│✾ > ${prefix}Estourar (marca)
┃│✾ > ${prefix}Bass (marca)
┃│✾ > ${prefix}Bass2 (marca)
┃│✾ > ${prefix}Vozmenino (marca)
╰════════════════ ⪨
`
}

exports.alteradores = alteradores
