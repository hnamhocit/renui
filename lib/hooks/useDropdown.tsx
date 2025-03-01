import { useState } from 'react'

export const useDropdown = () => {
	const [isOpen, setIsOpen] = useState(false)

	const onOpen = () => setIsOpen(true)
	const onOpenChange = () => setIsOpen((prev) => !prev)

	return { isOpen, onOpen, onOpenChange }
}
