import { 
    useDisclosure,
    Modal, 
    ModalOverlay, 
    ModalHeader,
    ModalCloseButton,
    ModalBody, 
    ModalContent, 
    ModalFooter, 
    Button
} from "@chakra-ui/react"; 
import PostFormView from "./uploadPostView";



const UploadModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
         <Button onClick={onOpen}>open modal</Button>
            <Modal id="upload modal, close on esc" isOpen={isOpen} onClose={onClose} isCentered closeOnEsc={true}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader id="upload post form modal"></ModalHeader>
                    <ModalCloseButton/> 
                    <ModalBody id="upload post form">
                        <PostFormView/>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UploadModal;