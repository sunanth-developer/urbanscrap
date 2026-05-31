import { MessageCircle } from 'lucide-react'

function ChatWidget() {
  return (
    <button type="button" className="chat-fab" aria-label="Open chat">
      <MessageCircle size={24} strokeWidth={2} />
    </button>
  )
}

export default ChatWidget
