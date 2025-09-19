import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({model: "gpt-4", 
  temperature: 0.7 , 
  maxTokens: 1000 ,
streaming: true} );

import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const messages = [
  new SystemMessage("Tu donnes la capitale du pays qu'on te donne. et la temeperature"),
  new HumanMessage("France"),
];

//const response = await model.invoke(messages);
//const response = await model.batch([" Salut", "Quel est la capital de la France?"]);
const response = await model.stream(messages);


for await (const s of await model.stream(messages)) {
  console.log(s);
}
  
//console.log(response);