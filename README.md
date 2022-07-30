# ts-express-api

This project is a very opinionated template project for doing an api using Nodejs, express, Typescript and jest. 

## Project choices

### Static Checks (typescript, prettier, linter)
Typescript: it is configured as strict as possible (no any), once you have reduced this you will catch many runtime erros just compiling

prettier and eslint: if you configure vscode properly,  prettier and eslint are saving you a lot of time indenting your code. Also the main benefit is that 
the diffs in the PRs will contain only meaningfull changes and not "whitespaces to tab" changes

### Project stracture: 
there are several levels in this app, inspired by https://feathersjs.com/ and this article : 
`rest` 
`engine`
`data services` this is what deal with the database`


### Testing strategy

#### What is quality?
A lot of this is about how to test the apis. 
what is quality? quality includes those topics: 
- code static checks (formatter, linter, typesystem)
- meaningfull test: test that are testing business logic, not your implementation
- metrics: smokes help you with this
- observability: aside of the metrics, your own internal logs will help you a lot with this. 


some necessary definition about testing:
the test pyramid define a quantity of test: 

<img src="https://3fxtqy18kygf3on3bu39kh93-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/test-automation-pyramid.jpg" width="200" height="200" />

what does this image mean?

the position in the pyramid obviusly refer to the quantity of tests you should have 


achiving all those things can be realy expensive. Often is more expensive than what it should be, becouse you are using different tool in different context 
to solve the same problems. Here are some examples:
- the test you write in your code

### How do we achive quality 
what are the 
`supertest and superagent`: 
