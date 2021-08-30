/* eslint-disable react/require-default-props */
import React, { CSSProperties } from 'react';
import { Box, Typography } from '@material-ui/core';

import { Container, Content } from './styles';
import { IPokemon } from '../../store/ducks/pokemon/types';

interface IProps {
  variant?: string;
  style?: CSSProperties;
  maxWidth?: string;
  data: IPokemon;
}

const PokemonCard: React.FC<IProps> = ({
  variant = 'compress',
  maxWidth,
  style,
  data,
}: IProps) => {
  return (
    <Container variant={variant} maxWidth={maxWidth} style={style}>
      <Content>
        <Typography variant="subtitle1" color="textSecondary">
          name: {data.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          generation: {data.generation}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          evolutionStage: {data.evolution_stage}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          evolved: {data.evolved}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          familyId: {data.family_id}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          crossGen: {data.cross_gen}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          type1: {data.types[0].name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          type2: {data.types[1].name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          weather1: {data.weathers[0].name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          weather2: {data.weathers[1].name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          statTotal: {data.stat_total}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          atk: {data.atk}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          def: {data.def}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          sta: {data.sta}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          legendary: {data.legendary}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          aquireable: {data.aquireable}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          spawns: {data.spawns}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          regional: {data.regional}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          raidable: {data.raidable}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          hatchable: {data.hatchable}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          shiny: {data.shiny}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          nest: {data.nest}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          new: {data.new}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          notGettable: {data.not_gettable}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          futureEvolve: {data.future_evolve}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          cp40: {data.cp40}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          cp39: {data.cp39}
        </Typography>
      </Content>
    </Container>
  );
};

export default PokemonCard;
