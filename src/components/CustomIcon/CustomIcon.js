import React, {useState} from 'react';
import * as flags from '../../assets/icons/flags';

export default function CustomIcon(props) {
  const Icon = props.icon || 'Turkish';
  const size = props.size || 16;

  const [components] = useState({
    Greek: flags.Greek,
    American: flags.American,
    British: flags.British,
    Chinese: flags.Chinese,
    French: flags.French,
    Indian: flags.Indian,
    Irish: flags.Irish,
    Italian: flags.Italian,
    Japanese: flags.Japanese,
    Mexican: flags.Mexican,
    Spanish: flags.Spanish,
    Thai: flags.Thai,
    European: flags.European,
    Vietnamese: flags.Vietnamese,
    German: flags.German,
    DefaultFlag: flags.DefaultFlag,
  });

  const TagName = components[Icon] || components.DefaultFlag;
  return <TagName width={size} height={size} style={props.style} />;
}
