import type { IconType } from 'react-icons';
import { SiAngular, SiCss, SiExpress, SiFivem, SiHtml5, SiJavascript, SiLua, SiMongodb, SiNodedotjs, SiPhp, SiPostgresql, SiReact } from 'react-icons/si';
import { TbApi, TbPrompt, TbRobot, TbSql, TbTopologyStar3 } from 'react-icons/tb';

/**
 * Icon for each skill card, keyed by the skill's `name` in data/portfolio.ts.
 * A skill with no entry here shows its two-letter `mono` badge instead.
 */
export const skillIcons: Record<string, IconType> = {
  'PHP Frameworks': SiPhp,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'REST APIs': TbApi,
  Angular: SiAngular,
  React: SiReact,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  SQL: TbSql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Lua: SiLua,
  'FiveM Server Development': SiFivem,
  'AI Prompts': TbPrompt,
  'AI Automations': TbRobot,
  'Building Systems': TbTopologyStar3,
};
