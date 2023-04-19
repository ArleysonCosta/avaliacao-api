const fastify = require('fastify')();

fastify.get('/calcular-media', (req,res)=>{
    const nota1 = Number(req.query.nota1);
    const nota2 = Number(req.query.nota2);
    const media = (nota1 + nota2) /2
    const aluno = req.query.aluno;

    if(media < 6){
        res.send({"mensagem" : `O aluno ${aluno} obteve a média ${media} e por isso foi REPROVADO`});
    }else if(media >= 6){
        res.send({"mensagem" : `O aluno ${aluno} obteve a média ${media} e por isso foi APROVADO`});
    }else{
        res.send("É necessário colocar o nome do aluno, nota1 e nota2");
    }
});

const PORT = 3000;
fastify.listen(PORT, (err)=>{
    if (err) throw err
    console.log(`servidor rodando na porta ${PORT}`);
});