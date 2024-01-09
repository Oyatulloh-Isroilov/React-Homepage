import Block from "./block";

function Footer() {
    return <div className="footer">
     <Block blockImg="retroPc.png" imgNumber="01" imgName="Reviving Retro PCs" imgInfo="What happens when old PCs are given modern upgrades?" />
     <Block blockImg="laptops.png" imgNumber="02" imgName="Top 10 Laptops of 2022" imgInfo="Our best picks for various needs and budgets." />
     <Block blockImg="growth.png" imgNumber="03" imgName="The Growth of Gaming" imgInfo="How the pandemic has sparked fresh opportunities." />
    </div>
}

export default Footer;