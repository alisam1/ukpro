import React from 'react'
import { Collapse } from 'antd'
import s from './style.module.scss'

const { Panel } = Collapse;

const CollapseComponent = ({content}) => (
    <Collapse className={s.collapseWrapper} expandIconPosition="right">
        {
            content.map((item, index) => (
                <Panel className={s.header} header={item.title} key={index}>
                    {
                        item.text.map((textItem, textIndex) => (
                            <p className={s.content} key={textIndex}>{textItem}</p>
                        ))
                    }
                </Panel>
            ))
        }
    </Collapse>
)

export default CollapseComponent