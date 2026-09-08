import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const builds=[
 {name:'Sakura Survival',version:'1.21.8',loader:'Fabric',mods:42,play:'2h 18m'},
 {name:'Vanilla',version:'1.21.8',loader:'Vanilla',mods:0,play:'8h 41m'},
 {name:'Nightfall',version:'1.20.1',loader:'Forge',mods:76,play:'31m'}
];
function App(){
 const [tab,setTab]=useState('home'); const [selected,setSelected]=useState(0); const [online,setOnline]=useState(false);
 return <div className="app">
  <div className="ambient a1"/><div className="ambient a2"/><div className="petals">{Array.from({length:18},(_,i)=><i key={i} style={{'--i':i}}/> )}</div>
  <aside><div className="brand"><img src="/src/assets/icon.png"/><div><b>SAKURA</b><span>CRAFT LAUNCHER</span></div></div>
   <nav>{[['home','⌂','Главная'],['versions','◈','Версии'],['mods','✦','Моды'],['servers','◉','Серверы'],['skins','◇','Скины']].map(x=><button className={tab===x[0]?'active':''} onClick={()=>setTab(x[0])} key={x[0]}><em>{x[1]}</em>{x[2]}</button>)}</nav>
   <div className="sidebottom"><button onClick={()=>setTab('settings')}>⚙ Настройки</button><small>v0.1.0 • foundation</small></div>
  </aside>
  <main><header><div className="crumb">{tab==='home'?'Главная':tab}</div><div className="account" onClick={()=>setOnline(!online)}><span className={online?'dot online':'dot'}/>{online?'Microsoft аккаунт':'Автономный профиль'} <b>⌄</b></div></header>
   {tab==='home'?<>
    <section className="hero"><div className="heroCopy"><span className="eyebrow">MINECRAFT JAVA EDITION</span><h1>Твой Minecraft.<br/><strong>Твой мир.</strong></h1><p>Сборки, моды и версии — в одном месте. Без лишнего.</p><div className="heroActions"><button className="play" onClick={()=>alert('Ядро запуска подключается следующим этапом')}><span>▶</span> ИГРАТЬ</button><button className="ghost">⋯</button></div></div><div className="world"><div className="moon"/><div className="mountain m1"/><div className="mountain m2"/><div className="tree"><div className="trunk"/><div className="crown"/></div><div className="ground"/></div></section>
    <section className="buildHead"><div><h2>Мои сборки</h2><p>Выбери мир, с которого продолжить</p></div><button className="new">＋ Новая сборка</button></section>
    <div className="builds">{builds.map((b,i)=><article className={'build '+(selected===i?'selected':'')} onClick={()=>setSelected(i)} key={b.name}><div className="cover"><span>{b.loader==='Fabric'?'F':b.loader==='Forge'?'F':'◇'}</span></div><div className="binfo"><h3>{b.name}</h3><p>{b.version} · {b.loader}</p><div className="meta"><span>{b.mods} модов</span><span>{b.play}</span></div></div><button className="more">•••</button></article>)}</div>
   </>:<div className="empty"><div className="emptyIcon">{tab==='settings'?'⚙':'✦'}</div><h1>{tab[0].toUpperCase()+tab.slice(1)}</h1><p>Раздел уже заложен в архитектуру лаунчера.</p></div>}
  </main>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
