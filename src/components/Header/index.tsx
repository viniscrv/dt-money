import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/logo.svg"
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { NewTransactionModal } from "../NewTransactionModal";


export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </AlertDialog.Trigger>
                    <NewTransactionModal/>
                </AlertDialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}