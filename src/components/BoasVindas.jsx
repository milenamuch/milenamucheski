import { Box, Typography } from "@mui/material";

const BoasVindas = () => {
  return (
    <Box className="texto-centralizado">
      <Box className="centralizado">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Queen_logo.svg/588px-Queen_logo.svg.png"
          alt="Queen"
          className="img-fluid"
        />
      </Box>
      <h1>Seja bem vindo</h1>
      <Typography>
        Queen foi uma banda britânica de rock, fundada em 1970 e ativa, sob sua
        formação clássica, até 1991. O grupo, formado por Brian May (guitarra e
        vocais), Freddie Mercury (vocais e piano), John Deacon (baixo) e Roger
        Taylor (bateria e vocais) é frequentemente citado como um dos expoentes
        do seu estilo, também sendo um dos recordistas de vendas de discos a
        nível mundial. A música da banda também é conhecida por ser altamente
        eclética, variando entre várias vertentes do rock. Originalmente, a
        banda surgiu a partir do trio Smile, formado por Brian May, Roger Taylor
        e o baixista Tim Staffell. Com o fim do conjunto, Freddie Mercury e John
        Deacon, juntamente com May e Roger, estabeleceram a formação de um novo
        grupo em meados de 1970. Os seus dois primeiros álbuns alcançaram pouco
        sucesso, até que ganhou popularidade internacional por meio de Sheer
        Heart Attack (1974) e, principalmente, por A Night at the Opera (1975),
        cujos singles "Bohemian Rhapsody" e "You're My Best Friend" alcançaram
        bons desempenhos. Mais tarde, a popularidade do quarteto estendeu-se com
        News of the World, em 1977, devido aos hits "We Will Rock You" e "We Are
        the Champions", bem como com "Crazy Little Thing Called Love" e "Another
        One Bites the Dust", de The Game, lançado em 1980.
      </Typography>
    </Box>
  );
};

export default BoasVindas;
