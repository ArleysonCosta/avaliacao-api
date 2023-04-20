const fastify = require('fastify')();

fastify.get('/calcular-media', (req,res)=>{
    try {
        const nota1 = Number(req.query.nota1);
        const nota2 = Number(req.query.nota2);
        const media = (nota1 + nota2) /2
        const aluno = req.query.aluno;
    
        if(isNaN(nota1) || isNaN(nota2) || !aluno ){
            throw "É necessário colocar o nome do aluno, nota um e a nota dois";
        }
        if(media < 6){
            res.send({"mensagem" : `O aluno ${aluno} obteve a média ${media} e por isso foi REPROVADO`});
        }else if(media >= 6){
            res.send({"mensagem" : `O aluno ${aluno} obteve a média ${media} e por isso foi APROVADO`});
        }
    } catch(err){
        res.send({"erro":err});
    }
    
});

const PORT = 3000;
fastify.listen(PORT, (err)=>{
    if (err) throw err
    console.log(`servidor rodando na porta ${PORT}`);
});