import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

import * as S from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export { Header }
