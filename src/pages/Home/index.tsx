import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" />

        <label htmlFor="minutesAmount">durante</label>
        <input type="number" id="minutesAmount" />

        <span>minutos.</span>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </FormContainer>
    </HomeContainer>
  )
}
