import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({ model: "gpt-4o"});

import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const prompt = ChatPromptTemplate.fromTemplate(
  "Tu donnes la capitale du pays qu'on te donne. {country}")
/*
const prompt = ChatPromptTemplate.fromMessages([
  new SystemMessage("Tu donnes la capitale du pays qu'on te donne."),
  new HumanMessage("{country}"),
]);*/

//console.log(await prompt.format({ country: "France" }));

const chain = prompt.pipe(model);

const response = await chain.invoke({ country: "France" });
console.log(response);