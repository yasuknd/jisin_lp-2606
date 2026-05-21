import './Message.scss';

const messageParagraphs = [
  '仕事、子育て、体型や顔の変化（進化？）、夫婦関係、婚活のこと、老後や更年期のこと⋯。いつもご愛読いただきありがとうございます。',
  '女性自身は、「読者からの信頼性を大切に、読者の視点で記事を作成する！」といった情熱を持ち続け、日々コンテンツを作成しています。心も体も若々しく、これから「人生の後半戦」を楽しもうという意欲に満ちている読者を応援したい。あなたの明日に「ときめき」を届けたい。',
  'そんな思いを胸に「信頼できるニュース」と、人生を明るく楽しく生きるために必要な、「健康」「お金」という２大テーマを中心に、「使える」読み応えのある情報をこれからも『女性自身』は発信していきますので、ご期待ください。',
];

function Message() {
  return (
    <section className="message" aria-labelledby="message-heading">
      <div className="message__inner">
        <h2 id="message-heading" className="message__heading">
          MESSAGE
        </h2>
        <h3 className="message__title">編集長からのコメント</h3>
        <div className="message__body">
          {messageParagraphs.map((paragraph) => (
            <p key={paragraph} className="message__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="message__signature">
          <p className="message__role">女性自身編集長</p>
          <p className="message__name">江口岳志</p>
        </div>
      </div>
    </section>
  );
}

export default Message;
