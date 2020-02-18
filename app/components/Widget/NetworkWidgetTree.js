/* eslint-disable */
import React from 'react'
import { Tree } from 'antd'
const { TreeNode } = Tree

const NetWorkWidgetTree = ({ onLoadData, treeData }) => {
    const renderTreeNodes = (data) =>
        data.map(item => {
            if (item.children) {
                return (

                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {renderTreeNodes(item.children)}
                    </TreeNode>

                );
            }
            return <TreeNode key={item.key} {...item} dataRef={item} />;
        });
    return <Tree onSelect={(key, e) => {
    }} loadData={onLoadData}>{renderTreeNodes(treeData)}</Tree>
}
export default NetWorkWidgetTree

