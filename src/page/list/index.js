import React, { Component } from 'react';
import { List } from '$yo-component';
import Header from '$component/header/index.js';
import yoHistory from '$common/history';
import './index.scss';

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: getRandomDataSource(25)
        };
    }

    refresh() {
        this.setState({ dataSource: getRandomDataSource(25) });
    }

    fetch() {
        this.setState({ dataSource: this.state.dataSource.concat(getRandomDataSource(15)) });
    }

    render() {
        return (
            <div className="yo-flex">
                <Header title="列表页" right={{ title: '分享', onTap: () => alert('hey Jude') }}/>
                <List
                    ref="list"
                    extraClass="flex m-list"
                    dataSource={this.state.dataSource}
                    renderItem={(item, i) => {return[
                        <div className="mark" key={i}>{i}</div>,<div className="flex" key={i+1}>{item.text}</div>
                    ]}}
                    infinite={true}
                    infiniteSize={20}
                    itemHeight={44}
                    usePullRefresh={true}
                    onRefresh={() => {
                        setTimeout(() => {
                            this.refresh();
                            this.refs.list.stopRefreshing(true);
                        }, 500);
                    }}
                    useLoadMore={true}
                    onLoad={() => {
                        setTimeout(() => {
                            this.fetch();
                            this.refs.list.stopLoading(true);
                        }, 500);
                    }}
                    itemExtraClass={(item, i) => {
                        return 'item ' + i;
                    }}
                    onItemTap={(item, i, ds) => {
                        yoHistory.push('/detail');
                    }}
                />
            </div>
        )
    }
}

let guid = -1;

function getArrayByLength(length) {
    var ret = [];
    for (var i = 0; i < length; i++) {
        ret[i] = null;
    }
    return ret;
}

function getRandomList(size) {
    return getArrayByLength(size).fill(1).map(num => parseInt(Math.random() * 100));
}

function getRandomDataSource(size) {
    return getRandomList(size).map(num => ({ text: num, key: ++guid }));
}


export default Detail;
