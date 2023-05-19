import { Observation } from 'aidbox-sdk/aidbox-types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import cx from 'classnames'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

import { CardWrapper } from '../../../shared/card'
import { client } from '../../../utils/aidbox-client'
import { formatDate } from '../../../utils/format-date'

import styles from './workspace.module.css'

const observationCodes = {
  'Body weight': '29463-7',
  'Body height': '8302-2',
  'Body temperature': '8310-5',
  'Heart rate': '8867-4',
  'Hemoglobin': '718-7',
  'Erythrocytes': '789-8',
  'Leukocytes': '6690-2'
}

type option = keyof typeof observationCodes

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function ClinicalVitals (): JSX.Element {
  const searchParams = new URLSearchParams(document.location.search)
  const patient_id = searchParams.get('id')
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<option>('Body weight')
  const [observations, setObservations] = useState<Observation[]>()

  const optionsList = Object.keys(observationCodes) as never as Array<option>

  useEffect(() => {
    client
      .getResources('Observation')
      .where('patient', `Patient/${patient_id}`)
      .where('code', observationCodes[selectedOption])
      .then((response) => {
        setObservations(response.entry.map((i) => i.resource))
      })
  }, [selectedOption, patient_id])

  const labels = observations?.map((observation) => formatDate(observation.effective?.dateTime || ''))

  const data = {
    labels,
    datasets: [
      {
        label: selectedOption,
        data: observations?.map((observation) => observation.value?.Quantity?.value),
        borderColor: '#2a9d8f',
        backgroundColor: '#2a9d8f'
      }
    ]
  }

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen)
  }

  const setSelectedThenCloseDropdown = (option: option) => {
    setSelectedOption(option)
    setIsOptionsOpen(false)
  }

  const title = 'Clinical vitals'

  return (
    <CardWrapper
      title={title}
    >
      <div
        className={styles.selectWrapper}
      >
        <div className={styles.selectContainer}>
          <button
            type='button'
            aria-haspopup='listbox'
            aria-expanded={isOptionsOpen}
            className={cx(styles.selectButton, {
              [styles.expanded]: isOptionsOpen
            })}
            onClick={toggleOptions}
          >
            {selectedOption}
          </button>
          <ul
            className={cx(styles.selectOptions, {
              [styles.show]: isOptionsOpen
            })}
            role='listbox'
            aria-activedescendant={selectedOption}
            tabIndex={-1}
          >
            {optionsList.map((option, index) => (
              <li
                key={index}
                id={option}
                role='option'
                aria-selected={selectedOption === option}
                tabIndex={0}
                onClick={() => {
                  setSelectedThenCloseDropdown(option)
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Line
        options={{
          responsive: true,
          layout: {
            autoPadding: true
          }
        }}
        data={data}
      />

    </CardWrapper>
  )
}
