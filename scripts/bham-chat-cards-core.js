class CoreCardHandler {
  static injectHTML(message, html) {}

  static messageFormula(message, html) {}
}

Hooks.on('renderChatMessage', (chatMessage, html) => {
  console.log(chatMessage.flags, 'bham chat message')
  console.log(html, 'bham html')

  if (chatMessage.flags.pf2e.context.type == 'damage-roll') {
    console.log('bham foi')
    console.log($(html).children(), 'bham children')

    // $(html).children('message-content').children('damage-application').hide()
    // $(html).hide()
  }
})
