import React from 'react'
import dynamic from 'next/dynamic'
const MotionCard = dynamic(() => import('@/src/components/products/motion-card'))
import "./styles.scss"

const TypeList = ({ compact, active }) => {
    return (
        <>
            <MotionCard
                image="/home/plante.webp"
                url="/mudas/reflorestamento"
                type="green"
                title="Plante uma Arvore 🌴"
                description="Um novo futuro pode começar com você !"
                hover="Clique para ver nossa mudas de reflorestamento"
                className={`${compact === true ? 'compact' : ''}  ${active == 'forest' ? 'active' : ''}`}
            />
            <MotionCard
                image="/home/flor.webp"
                url="/mudas/ornamentais"
                type="purple"
                title="Permita Florecer 🌹"
                description="Tudo que floresce na nossa vida é resultado do que cultivamos !"
                hover="Clique para ver nossa mudas de ornamentais"
                className={`${compact === true ? 'compact' : ''} ${active == 'flowers' ? 'active' : ''}`}
            />
            <MotionCard
                image="/home/jabuticabeira.webp"
                url="/mudas/frutiferas"
                type="black"
                title="Adoce a Vida 🍍"
                description="De mais sabor ao mundo e adoce o dia das pessoas colhendo frutas !"
                hover="Clique para ver nossa mudas de frutíferas"
                className={`${compact === true ? 'compact' : ''} ${active == 'fruits' ? 'active' : ''}`}
            />
        </>
    )
}

export default TypeList