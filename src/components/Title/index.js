import React from 'react'

export default function Title({ children, as }) {
    const Tag = as;
    return (
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
            ${Tag} {
                color: red;
            }
        `}
            </style>
        </React.Fragment>
    );
}