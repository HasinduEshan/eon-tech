import React from 'react'
import './custom.css'
import CompanyIcons from './company_icons/CompanyIcons'
import air_craft from './../img/plane.png'
import automotive from './../img/simulation.png'
import agriculture from './../img/plant.png'
import education from './../img/mortarboard.png'
import transportation from './../img/car.png'
import research from './../img/analysis.png'
import retail from './../img/price-tag.png'
import gaming from './../img/games.png'
import health from './../img/first-aid-kit.png'
import energy from './../img/lighting.png'


export default function Company() {
  return (
    <div className='company'>
      <div className='company-topic'>Why Join EonTech</div>
      <div className='company-main-content'>We Power Multiple Industries</div>
      <div className='company-sub-content'>Our focus is on industries that require critical and progressive innovations through the integration of intelligence and reasoning, coupled with
        scientific research to design sustainable solutions.
      </div>
      <div className='container-fluid'>
        <div className='company-icons-content  row'>
          <CompanyIcons image={air_craft} title={'Travel & Tourism'}/>
          <CompanyIcons image={automotive} title={'Automotive'}/>
          <CompanyIcons image={agriculture} title={'Agriculture'}/>
          <CompanyIcons image={education} title={'Education'}/>
          <CompanyIcons image={transportation} title={'Transportation'}/>
          <CompanyIcons image={research} title={'Research'}/>
          <CompanyIcons image={retail} title={'Retail'}/>
          <CompanyIcons image={gaming} title={'Gaming'}/>
          <CompanyIcons image={health} title={'Healthcare'}/>
          <CompanyIcons image={energy} title={'Energy'}/>
        </div>
      </div>
    </div>
  )
}
