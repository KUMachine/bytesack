import { useTranslation } from 'react-i18next'

interface HomeSliderProps {
    className?: string
}

const HomeSlider = ({ className }: HomeSliderProps) => {
    const { t } = useTranslation('common')
    return <div>{t('common:discription:part1')}</div>
}

export default HomeSlider
