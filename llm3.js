import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({ model: "gpt-4"});

import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const prompt = ChatPromptTemplate.fromTemplate(
  "Tu donnes la capitale du pays qu'on te donne. {country}")

const parser = new StringOutputParser();
const chain = prompt.pipe(model).pipe(parser);

const response = await chain.invoke({ country: "France" });
console.log(response);