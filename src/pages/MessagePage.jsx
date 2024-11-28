

const MessagesPage = () => {
  const messages = [
    { id: 1, name: "chin_0414", message: "我想要聊一聊...", time: "10小時", unread: true },
    { id: 2, name: "Janna ✨曼君", message: "得想一個柔和一點的遊戲", time: "2天", unread: true },
    { id: 3, name: "黃小慈", message: "台北天氣時好時壞...", time: "1週", unread: false },
    { id: 4, name: "永盛 王", message: "假很愉快！", time: "1週", unread: false },
    { id: 5, name: "若舒✨", message: "當然可要...", time: "1週", unread: true },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">emmalu0309</h1>
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>

      {/* Quick Features */}
      <div className="flex space-x-4 p-4">
        <div className="flex flex-col items-center">
          <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center">
            <i className="fas fa-sticky-note text-xl"></i>
          </div>
          <p className="mt-2 text-sm">你的便利貼</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center">
            <i className="fas fa-user text-xl"></i>
          </div>
          <p className="mt-2 text-sm">林芝君</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        <button className="flex-1 py-2 text-center border-b-2 border-white font-bold">訊息</button>
        <button className="flex-1 py-2 text-center text-gray-400">Requests (2)</button>
      </div>

      {/* Messages List */}
      <div className="p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-center p-3 rounded-lg ${
              msg.unread ? "bg-gray-800" : "bg-gray-700"
            } hover:bg-gray-600`}
          >
            {/* Profile Picture */}
            <div className="w-12 h-12 rounded-full bg-gray-500"></div>
            {/* Message Info */}
            <div className="flex-1 ml-4">
              <p className="font-bold">{msg.name}</p>
              <p className="text-sm text-gray-400 truncate">{msg.message}</p>
            </div>
            {/* Time */}
            <div className="text-sm text-gray-400">{msg.time}</div>
            {/* Unread Indicator */}
            {msg.unread && <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>}
          </div>
        ))}
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center h-64">
        <div className="text-4xl text-gray-400 mb-4">
          <i className="far fa-comments"></i>
        </div>
        <p className="text-gray-400">私下傳送相片和訊息給朋友或群組</p>
        <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg text-white font-bold">
          發送訊息
        </button>
      </div>
    </div>
  );
};

export default MessagesPage;