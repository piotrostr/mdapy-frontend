import { descriptions } from './descriptions' 

export const firstDatasetPlaceholder = [
  [{'value': 'UK027'}, {'value': '1167,3'}, {'value': '4,9'}], 
  [{'value': 'UK025'}, {'value': '1185,5'}, {'value': '4,8'}],
  [{'value': 'UK025'}, {'value': '1201,6'}, {'value': '4,8'}], 
  [{'value': 'UK027'}, {'value': '1207,5'}, {'value': '5,6'}], 
  [{'value': 'UK025'}, {'value': '1209,6'}, {'value': '4,7'}],
  [{'value': 'UK027'}, {'value': '1231,1'}, {'value': '15,4'}],
  [{'value': 'UK025'}, {'value': '1258,1'}, {'value': '4,7'}],
  [{'value': 'UK027'}, {'value': '1287,2'}, {'value': '4,7'}] , 
  [{'value': 'UK025'}, {'value': '1326,9'}, {'value': '12,6'}],
  [{'value': 'UK025'}, {'value': '1338,2'}, {'value': '8,9'}], 
  [{'value': 'UK025'}, {'value': '1326,9'}, {'value': '12,6'}], 
  [{'value': 'UK025'}, {'value': '1338,2'}, {'value': '8,9'}]
]

export const secondDatasetPlaceholder = [
  [
    {'value': 'UK027'}, {'value': '1,3405'}, {'value': '5,3'}, 
    {'value': '0,3100'}, {'value': '5,5'}
  ],
]

export function getDescription(method) {
  if (method === 'YC1s')
    return descriptions.yc1s
  else if (method === 'YC2s')
    return descriptions.yc2s
  else if (method === 'Tau')
    return descriptions.tau
  else if (method === 'YSP')
    return descriptions.ysp
  else if (method === 'MLA')
    return descriptions.mla
  else if (method === 'YDZ')
    return descriptions.ydz
  else if (method === 'Y3Zo')
    return descriptions.y3zo
  else if (method === 'Y3Za')
    return descriptions.y3za
  else if (method === 'YSG')
    return descriptions.ysg
}

export function getTitle(method) {
  const titles = {
    yc1s: 'YC1$\sigma$ (2+): Youngest Grain Cluster at 1$\sigma$',
    yc2s: 'YC2$\sigma$ (3+): Youngest Grain Cluster at 2$\sigma$',
    tau: 'The $\tau$ Method',
    ysp: 'YSP: The Youngest Statistical Population',
    mla: 'The MLA Method',
    ydz: 'YDZ: Youngest Detrital Zircon',
    y3zo: 'Y3Zo: Youngest Three Zircons at 2$\sigma$ (Y3Zo)',
    y3za: 'Y3Za: Youngest Three Zircons (Y3Za)',
    ysg: 'YSG: Youngest Single Grain'
  }
  if (method === 'YC1s')
    return titles.yc1s
  else if (method === 'YC2s')
    return titles.yc2s
  else if (method === 'Tau')
    return titles.tau
  else if (method === 'YSP')
    return titles.ysp
  else if (method === 'MLA')
    return titles.mla
  else if (method === 'YDZ')
    return titles.ydz
  else if (method === 'Y3Zo')
    return titles.y3zo
  else if (method === 'Y3Za')
    return titles.y3za
  else if (method === 'YSG')
    return titles.ysg
}
