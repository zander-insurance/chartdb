// ZANDER_CHANGES - START
import React from 'react';
import { useNavigate } from 'react-router-dom';

// import React, { useCallback } from 'react';
// import ChartDBLogo from '@/assets/logo-light.png';
// import ChartDBDarkLogo from '@/assets/logo-dark.png';
// import { useBreakpoint } from '@/hooks/use-breakpoint';
// import { useTheme } from '@/hooks/use-theme';
// import { DiagramName } from './diagram-name';
// import { LastSaved } from './last-saved';
// import { LanguageNav } from './language-nav/language-nav';
// import { Menu } from './menu/menu';
// ZANDER_CHANGES - END
export interface TopNavbarProps {}

export const TopNavbar: React.FC<TopNavbarProps> = () => {
    // ZANDER_CHANGES - START
    const navigate = useNavigate();

    const topNavBarItems = [
        {
            name: 'ZanderApiDb',
            db: 'zanderApiDb',
        },
        {
            name: 'ZanderWebDb',
            db: 'zanderWebDb',
        },
        {
            name: 'AgentFrontDb',
            db: 'agentfrontdb',
        },
    ];
    // const { effectiveTheme } = useTheme();
    // const { isMd: isDesktop } = useBreakpoint('md');

    // const renderStars = useCallback(() => {
    //     return (
    //         <iframe
    //             src={`https://ghbtns.com/github-btn.html?user=chartdb&repo=chartdb&type=star&size=${isDesktop ? 'large' : 'small'}&text=false`}
    //             width={isDesktop ? '40' : '25'}
    //             height={isDesktop ? '30' : '20'}
    //             title="GitHub"
    //         ></iframe>
    //     );
    // }, [isDesktop]);
    // ZANDER_CHANGES - END
    return (
        <nav className="flex flex-col justify-between border-b px-3 items-center h-12">
            {/*
        <nav className="flex flex-col justify-between border-b px-3 md:h-12 md:flex-row md:items-center md:px-4">
            <div className="flex flex-1 flex-col justify-between gap-x-1 md:flex-row md:justify-normal">
                <div className="flex items-center justify-between pt-[8px] font-primary md:py-[10px]">
                    <a
                        href="https://chartdb.io"
                        className="cursor-pointer"
                        rel="noreferrer"
                    >
                        <img
                            src={
                                effectiveTheme === 'light'
                                    ? ChartDBLogo
                                    : ChartDBDarkLogo
                            }
                            alt="chartDB"
                            className="h-4 max-w-fit"
                        />
                    </a>
                    {!isDesktop ? (
                        <div className="flex items-center gap-2">
                            {renderStars()}
                            <LanguageNav />
                        </div>
                    ) : null}
                </div>
                <Menu />
            </div>
            
            {isDesktop ? (
        
                <>
            */}
            {/* ZANDER_CHANGES - START */}

            <div className="flex flex-1 gap-10">
                {topNavBarItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => {
                            navigate(`/diagrams/${item.db}`);
                        }}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            {/*
                    <DiagramName />
                    <div className="hidden flex-1 items-center justify-end gap-2 sm:flex">
                        <LastSaved />
                        {renderStars()}
                        <LanguageNav />
                    </div>
                    
                    
                </>
            ) : (
                <div className="flex flex-1 justify-center pb-2 pt-1">
                    <DiagramName />
                </div>
            )}
                */}
            {/* ZANDER_CHANGES - END */}
        </nav>
    );
};
