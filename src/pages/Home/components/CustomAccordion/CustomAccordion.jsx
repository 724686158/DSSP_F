import React, { Component } from 'react';
import { Accordion } from '@icedesign/base';
import IceContainer from '@icedesign/container';

const mockData = [
  {
    title: '欢迎到访',
    content:
      '欢迎到访sirius数据科学平台',
  },
  {
    title: 'Python3代码编辑器jupyter',
    content:
      'http://science.mengzicheng.cn:22888'
  },
  {
    title: 'Neo4j控制面板',
    content:
      'http://science.mengzicheng.cn:7473'
  },
];

export default class CustomAccordion extends Component {
  static displayName = 'CustomAccordion';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: mockData,
    };
  }

  onChange(status) {
    const { dataSource } = this.state;
    this.setState({
      dataSource: dataSource.map((e, k) => {
        return Object.assign({}, e, { expanded: status[k] });
      }),
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <IceContainer>
        <Accordion
          style={styles.accordion}
          single
          singleShrink
          onChange={this.onChange.bind(this)}
          dataSource={dataSource}
        />
      </IceContainer>
    );
  }
}

const styles = {
  accordion: {
    borderRadius: '4px',
  },
};
