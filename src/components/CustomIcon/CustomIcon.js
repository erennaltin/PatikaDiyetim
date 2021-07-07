import React, {useState} from 'react';
import * as flags from '../../assets/icons/flags';

export default function CustomIcon(props) {
  const Icon = props.icon || 'Turkish';
  const size = props.size || 16;

  const [components] = useState({
    Turkish: flags.Turkish,
    Greek: flags.Greek,
    American: flags.American,
    British: flags.British,
    Canadian: flags.Canadian,
    Chinese: flags.Chinese,
    Dutch: flags.Dutch,
    Egyptian: flags.Egyptian,
    French: flags.French,
    Indian: flags.Indian,
    Irish: flags.Irish,
    Italian: flags.Italian,
    Jamaican: flags.Jamaican,
    Japanese: flags.Japanese,
    Kenyan: flags.Kenyan,
    Malaysian: flags.Malaysian,
    Mexican: flags.Mexican,
    Moroccan: flags.Moroccan,
    Polish: flags.Polish,
    Portuguese: flags.Portuguese,
    Russian: flags.Russian,
    Spanish: flags.Spanish,
    Thai: flags.Thai,
    Tunisian: flags.Tunisian,
    Unknown: flags.Unknown,
    Vietnamese: flags.Vietnamese,
  });

  const TagName = components[Icon];
  return <TagName width={size} height={size} style={props.style} />;
}
