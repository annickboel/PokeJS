/*
* Pokemon: Presentational component
*/
import React, { Component } from 'react';
import './Pokemon.css';
import Navigator from '../commons/Navigator';
import * as urls from '../../constants/Urls'

class Pokemon extends Component {
	constructor(props) {
    super(props);
    this.handleNavigateTo = this.handleNavigateTo.bind(this);
  }

  handleNavigateTo(url) {
  	console.log('POKEMON handleNavigateTo '+url);
  	this.props.navigateToHandler(url);
  }

  
  renderName(value) {
    return (
      <div className='Pokemon-detail-item'>
          <div className='Pokemon-detail-item-left'>
            <div className='Pokemon-detail-name-label'>
              Name :
            </div>
          </div>
          <div className='Pokemon-detail-item-right'>
            <div className='Pokemon-detail-name-value'>
              {value}
            </div>
        </div>
      </div>
    )
  }

  renderId(value) {
    return (
      <div className='Pokemon-detail-item'>
          <div className='Pokemon-detail-item-left'>
            <div className='Pokemon-detail-id-label'>
              ID :
            </div>
          </div>
          <div className='Pokemon-detail-item-right'>
            <div className='Pokemon-detail-id-value'>
              {value}
            </div>
        </div>
      </div>
    )
  }

  renderFamily(value) {
    return (
      <div className='Pokemon-detail-item'>
          <div className='Pokemon-detail-item-left'>
            <div className='Pokemon-detail-family-label'>
              Family :
            </div>
          </div>
          <div className='Pokemon-detail-item-right'>
            <div className='Pokemon-detail-family-value'>
              {value}
            </div>
        </div>
      </div>
    )
  }

  renderSprite(sprite) {
    if (sprite) {
      return (
          <img class='Pokemon-detail-sprite' width='200%' src={sprite} alt='sprite'/>
      )
    }
    else {
      return (
        <div/>
      )
    }
  }

  renderType(index, item) {
    const {type} = item
    return (
      <div className='Pokemon-detail-type'>
          {type.name}
      </div>  
    ) 
  }

  renderTypes(types) {
    return (
       <div className='Pokemon-detail-item'>
          <div className='Pokemon-detail-item-left'>
            <div className='Pokemon-detail-types-label'>
              Types :
            </div>
          </div>
          <div className='Pokemon-detail-item-right'>
            <div className='Pokemon-detail-value bold'>
              <div className='Pokemon-detail-types'>
                {types.map((item,index) => this.renderType(index, item))}
              </div>
            </div>
        </div>
      </div>
    )
  }

  renderHeldItem(index, item) {
    return (
      <div className='Pokemon-detail-helditem'>
          {'item.name'}
      </div>  
    ) 
  }

  renderHeldItems(held_items) {
    return (
       <div className='Pokemon-detail-item'>
          <div className='Pokemon-detail-item-left'>
            <div className='Pokemon-detail-helditems-label'>
              Held Items :
            </div>
          </div>
          <div className='Pokemon-detail-item-right'>
            <div className='Pokemon-detail-value bold'>
              <div className='Pokemon-detail-helditems'>
                {held_items.map((item,index) => this.renderHeldItem(index, item))}
              </div>
            </div>
        </div>
      </div>
    )
  }

  renderMove(move) {
    console.log('RENDER MOVE')
    return (
      <div className='Pokemon-detail-move'>
        {move.name}
      </div> 
    ) 
  }

  renderMovesItems(moves) {
    const length = moves.length
    var i=0;
    for (i=0;i<length;i++) {
      var item = moves[0]
      var {move, version_groups} = item;
      this.renderMove(move.name)
    }
  }

  renderMoves(moves) {
    const length = moves.length
    const item = moves[0]
    const {move, version_groups} = item;
    console.log(move.name)
    return (
       <div className='Pokemon-detail-item'>
          <div className='Pokemon-detail-item-left'>
            <div className='Pokemon-detail-moves-label'>
              Moves :
            </div>
          </div>
          <div className='Pokemon-detail-item-right'>
            <div className='Pokemon-detail-value bold'>
              <div className='Pokemon-detail-moves'>
                {this.renderMovesItems(moves)}
              </div>
            </div>
        </div>
      </div>
    )
  }

  renderEvolutions() {
    return (
        <div className='Pokemon-detail-item'>
          <div className='Pokemon-detail-item-left'>
            <div className='Pokemon-detail-evolutions-label'>
              Evolutions :
            </div>
          </div>
          <div className='Pokemon-detail-item-right'>
            <div className='Pokemon-detail-value bold'>
              <div className='Pokemon-detail-evolutions'>
                
              </div>
            </div>
        </div>
      </div>
    )
  }

  renderSprites(sprites) {
    return (
       <div className='Pokemon-detail-item'>
          <div className='Pokemon-detail-item-left'>
            <div className='Pokemon-detail-sprites-label'>
              Sprites :
            </div>
          </div>
          <div className='Pokemon-detail-item-right'>
            <div className='Pokemon-detail-value bold'>
              <div className='Pokemon-detail-sprites'>
                {this.renderSprite(sprites['back_default'])}
                {this.renderSprite(sprites['back_shiny'])}
                {this.renderSprite(sprites['back_shiny_female'])}
                {this.renderSprite(sprites['front_default'])}
                {this.renderSprite(sprites['front_shiny'])}
                {this.renderSprite(sprites['front_shiny_female'])}
              </div>
            </div>
        </div>
      </div>
    )
  }

	render() {
    const pokemon = this.props.pokemon
    const { detail } = pokemon
    const { data } = detail
    const pokemon_detail = data 
    console.log(pokemon_detail)
    const { sprites, types, moves, held_items } = pokemon_detail
    const sprite = sprites['front_default']
    const url = urls.POKEDEX_PAGE_URL
    
		return ( 
		 	<div className='Pokemon'>
        <div className='Pokemon-navigator'>
        	<Navigator navigateToHandler={this.handleNavigateTo} url={url}/>
        </div>
        <div className='Pokemon-content-wrapper'>
        	<div className='Pokemon-content-left-wrapper'>
        		<div className='Pokemon-content-left'>
        			<div className='Pokemon-picture-wrapper'>
        				<img className='Pokemon-picture' src={sprite} width="100%" alt='sprite'/>
        			</div>
        		</div>
        	</div>
        	<div className='Pokemon-content-right-wrapper'>
        		<div className='Pokemon-content-right'>
              <div className='Pokemon-detail-items-wrapper'>
                <div className='Pokemon-detail-items'>
                  {this.renderName(pokemon.name)} 
                  {this.renderId(this.props.id)}  
                  <div className='Pokemon-detail-types'>
                  {this.renderTypes(types)}
                  </div>
                  {this.renderEvolutions()} 
                  {this.renderSprites(sprites)} 
                  {this.renderFamily('pokemon.family')} 
                  {this.renderMoves(moves)} 
                  {this.renderHeldItems(held_items)} 
                </div>
              </div>
        		</div>
        	</div>
        </div>
      </div>
		)
	}
}
//{sprites.map((picture,index) => this.renderSprite(index, sprite))}
export default (Pokemon);