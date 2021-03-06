/**
 * The Last Question
 * by Isaac Asimov
 */
interface IStoryBit {
  text: string;
  character?: string;
  transition?: boolean;
  slide?: string;
}

interface ITLQ {
  part1: IStoryBit[];
  part2: IStoryBit[];
  part3: IStoryBit[];
  part4: IStoryBit[];
  part5: IStoryBit[];
  part6: IStoryBit[];
  part7: IStoryBit[];
}

export const TLQ:ITLQ = {
  part1: [],
  part2: [],
  part3: [],
  part4: [],
  part5: [],
  part6: [],
  part7: []
};

TLQ.part1 = [
  {
    text: 'The last question was asked for the first time, half in jest, on May 21, 2061, at a time when humanity first stepped into the light. The question came about as a result of a five- dollar bet over highballs, and it happened this way:'
  },
  {
    text: 'Alexander Adell and Bertram Lupov were two of the faithful attendants of Multivac. As well as any human beings could, they knew what lay behind the cold, clicking, flashing face -- miles and miles of face -- of that giant computer. They had at least a vague notion of the general plan of relays and circuits that had long since grown past the point where any single human could possibly have a firm grasp of the whole.'
  },
  {
    text: 'Multivac was self-adjusting and self-correcting. It had to be, for nothing human could adjust and correct it quickly enough or even adequately enough. So Adell and Lupov attended the monstrous giant only lightly and superficially, yet as well as any men could. They fed it data, adjusted questions to its needs and translated the answers that were issued. Certainly they, and all others like them, were fully entitled to share in the glory that was Multivac\'s.'
  },
  {
    text: 'For decades, Multivac had helped design the ships and plot the trajectories that enabled man to reach the Moon, Mars, and Venus, but past that, Earth\'s poor resources could not support the ships. Too much energy was needed for the long trips. Earth exploited its coal and uranium with increasing efficiency, but there was only so much of both.'
  },
  {
    text: 'But slowly Multivac learned enough to answer deeper questions more fundamentally, and on May 14, 2061, what had been theory, became fact.',
    transition: false
  },
  {
    text: 'The energy of the sun was stored, converted, and utilized directly on a planet-wide scale. All Earth turned off its burning coal, its fissioning uranium, and flipped the switch that connected all of it to a small station, one mile in diameter, circling the Earth at half the distance of the Moon. All Earth ran by invisible beams of sunpower.'
  },
  {
    text: 'Seven days had not sufficed to dim the glory of it and Adell and Lupov finally managed to escape from the public functions, and to meet in quiet where no one would think of looking for them, in the deserted underground chambers, where portions of the mighty buried body of Multivac showed. Unattended, idling, sorting data with contented lazy clickings, Multivac, too, had earned its vacation and the boys appreciated that. They had no intention, originally, of disturbing it.'
  },
  {
    text: 'They had brought a bottle with them, and their only concern at the moment was to relax in the company of each other and the bottle.'
  },
  {
    text: '"It\'s amazing when you think of it," said Adell. His broad face had lines of weariness in it, and he stirred his drink slowly with a glass rod, watching the cubes of ice slur clumsily about. "All the energy we can possibly ever use for free. Enough energy, if we wanted to draw on it, to melt all Earth into a big drop of impure liquid iron, and still never miss the energy so used. All the energy we could ever use, forever and forever and forever." Lupov cocked his head sideways. He had a trick of doing that when he wanted to be contrary, and he wanted to be contrary now, partly because he had had to carry the ice and glassware. "Not forever," he said.',
    transition: false
  },
  {
    text: '"Oh, hell, just about forever. Till the sun runs down, Bert."',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"That\'s not forever."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"All right, then. Billions and billions of years. Ten billion, maybe. Are you satisfied?"',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: 'Lupov put his fingers through his thinning hair as though to reassure himself that some was still left and sipped gently at his own drink. "Ten billion years isn\'t forever."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Well, it will last our time, won\'t it?"',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"So would the coal and uranium."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"All right, but now we can hook up each individual spaceship to the Solar Station, and it can go to Pluto and back a million times without ever worrying about fuel. You can\'t do that on coal and uranium. Ask Multivac, if you don\'t believe me."',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"I don\'t have to ask Multivac. I know that."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Then stop running down what Multivac\'s done for us," said Adell, blazing up, "It did all right."',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Who says it didn\'t? What I say is that a sun won\'t last forever. That\'s all I\'m saying. We\'re safe for ten billion years, but then what?" Lupov pointed a slightly shaky finger at the other. "And don\'t say we\'ll switch to another sun."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: 'There was silence for a while. Adell put his glass to his lips only occasionally, and Lupov\'s eyes slowly closed. They rested.<br/><br/>Then Lupov\'s eyes snapped open. "You\'re thinking we\'ll switch to another sun when ours is done, aren\'t you?"',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"I\'m not thinking."',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Sure you are. You\'re weak on logic, that\'s the trouble with you. You\'re like the guy in the story who was caught in a sudden shower and who ran to a grove of trees and got under one. He wasn\'t worried, you see, because he figured when one tree got wet through, he would just get under another one."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"I get it," said Adell. "Don\'t shout. When the sun is done, the other stars will be gone, too."',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Darn right they will," muttered Lupov. "It all had a beginning in the original cosmic explosion, whatever that was, and it\'ll all have an end when all the stars run down. Some run down faster than others. Hell, the giants won\'t last a hundred million years. The sun will last ten billion years and maybe the dwarfs will last two hundred billion for all the good they are. But just give us a trillion years and everything will be dark. Entropy has to increase to maximum, that\'s all."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"I know all about entropy," said Adell, standing on his dignity.',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"The hell you do."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"I know as much as you do."',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Then you know everything\'s got to run down someday."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"All right. Who says they won\'t?"',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"You did, you poor sap. You said we had all the energy we needed, forever. You said \'forever.\'',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: 'It was Adell\'s turn to be contrary. "Maybe we can build things up again someday," he said.',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Never."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Why not? Someday."',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Never."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"Ask Multivac."',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: '"You ask Multivac. I dare you. Five dollars says it can\'t be done."',
    character: 'Lupov',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: 'Adell was just drunk enough to try, just sober enough to be able to phrase the necessary symbols and operations into a question which, in words, might have corresponded to this: "Will mankind one day without the net expenditure of energy be able to restore the sun to its full youthfulness even after it had died of old age?"<br/><br/>"Or maybe it could be put more simply like this: How can the net amount of entropy of the universe be massively decreased?"',
    character: 'Adell',
    slide: 'ConversationSlideContainer',
    transition: false
  },
  {
    text: 'Multivac fell dead and silent. The slow flashing of lights ceased, the distant sounds of clicking relays ended.'
  },
  {
    text: 'Then, just as the frightened technicians felt they could hold their breath no longer, there was a sudden springing to life of the teletype attached to that portion of Multivac. Five words were printed: INSUFFICIENT DATA FOR MEANINGFUL ANSWER.'
  },
  {
    text: '"No bet," whispered Lupov. They left hurriedly.'
  },
  {
    text: 'By next morning, the two, plagued with throbbing head and cottony mouth, had forgotten the incident.'
  }
];

export default TLQ;
