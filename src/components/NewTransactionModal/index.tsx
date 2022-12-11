import * as AlertDialog from '@radix-ui/react-alert-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTransactionModal() {
    return (
        <AlertDialog.Portal>
            <Overlay/>
            <Content>
                <AlertDialog.Title>Nova Transação</AlertDialog.Title>

                <CloseButton>
                    <X  size={24}/>
                </CloseButton>

                <form>
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </AlertDialog.Portal>
    )
}